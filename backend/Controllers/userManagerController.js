/** @format */

import { PrismaClient } from "../generated/prisma/index.js";
import { hashPassword } from "../utils/passwordHash.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prisma = new PrismaClient();

function getFullUrl(req, filePath) {
  return `${req.protocol}://${req.get("host")}/${filePath.replace(/\\/g, "/")}`;
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

export const createUserWithAccount = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fullName,
      email,
      phone,
      societyName,
      departementCode,
      departementName,
      siret,
      username,
      password,
      role,
    } = req.body;

    if (!firstName || !lastName || !username || !password || !role) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const validRoles = ["ADMIN", "AGENT", "COMMERCIAL", "SUPERVISOR", "CLIENT"];
    if (!validRoles.includes(role.toUpperCase())) {
      return res.status(400).json({
        message:
          "Invalid role. Must be one of: ADMIN, AGENT, COMMERCIAL, SUPERVISOR, CLIENT",
      });
    }

    const transaction = await prisma.$transaction(async (prisma) => {
      const user = await prisma.users.create({
        data: {
          firstName,
          lastName,
          fullName,
          email,
          phone,
          societyName,
          departementCode,
          departementName,
          siret,
          image: req.files?.image
            ? getFullUrl(
                req,
                `uploads/images/users/${req.files.image[0].filename}`
              )
            : getFullUrl(req, "public/images/user_icon.png"),
          logo: req.files?.logo
            ? getFullUrl(
                req,
                `uploads/images/logos/societyLogos/${req.files.logo[0].filename}`
              )
            : null,
        },
      });

      const hashedPassword = await hashPassword(password);
      const newAccount = await prisma.accounts.create({
        data: {
          username,
          password:hashedPassword,
          role: role.toUpperCase(),
          userId: parseInt(user.id),
        },
      });

      return { user, newAccount };
    });

    return res.status(201).json({
      message: "User with account created successfully!",
      user: transaction.user,
      account: transaction.newAccount,
    });
  } catch (error) {
    console.error("Error creating user with account:", error);
    return res
      .status(500)
      .json({ message: "Failed to create user with account." });
  }
};


export const updateUserStatus = async (req, res) => {
  const { userId } = req.params;
  const { status } = req.body;

  const validStatuses = ["ACTIVE", "INACTIVE"];
  if (!validStatuses.includes(status?.toUpperCase())) {
    return res
      .status(400)
      .json({ message: "Status must be 'ACTIVE' or 'INACTIVE'." });
  }

  try {
    const transaction = await prisma.$transaction(async (prisma) => {
      const user = await prisma.users.findUnique({
        where: { id: parseInt(userId) },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const updatedUser = await prisma.users.update({
        where: { id: parseInt(userId) },
        data: { userStatus: status.toUpperCase() },
      });

      if (status.toUpperCase() === "INACTIVE") {
        await prisma.accounts.updateMany({
          where: { userId: parseInt(userId) },
          data: { status: "INACTIVE" },
        });
      }

      return updatedUser;
    });

    return res.status(200).json({
      message: "User status updated successfully.",
      user: transaction,
    });
  } catch (error) {
    console.error("Error updating user status:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating user status." });
  }
};


export const deleteUserAndAccounts = async (req, res) => {
  const { userId } = req.params;

  try {
    const transaction = await prisma.$transaction(async (prisma) => {
      const user = await prisma.users.findUnique({
        where: { id: parseInt(userId) },
      });

      if (!user) {
        throw new Error("User not found");
      }

      await prisma.accounts.deleteMany({
        where: { userId: parseInt(userId) },
      });

      if (user.image && user.image.includes("/uploads/")) {
        const imagePath = path.join(
          __dirname,
          user.image.replace("/uploads", "")
        );
        if (fileExists(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      if (user.logo && user.logo.includes("/uploads/")) {
        const logoPath = path.join(
          __dirname,
          user.logo.replace("/uploads", "")
        );
        if (fileExists(logoPath)) {
          fs.unlinkSync(logoPath);
        }
      }

      await prisma.users.delete({ where: { id: parseInt(userId) } });

      return user;
    });

    return res.status(200).json({
      message: "User and associated accounts deleted successfully!",
      user: transaction,
    });
  } catch (error) {
    console.error("Error deleting user and accounts:", error);
    return res.status(500).json({
      message: "An error occurred while deleting user and accounts.",
      error: error.message,
    });
  }
};

export const getUserAccounts = async (req, res) => {
  const { userId } = req.params;
  const { status } = req.query; 
  const validStatuses = ["ACTIVE", "INACTIVE"];

  try {
    if (status && !validStatuses.includes(status.toUpperCase())) {
      return res
        .status(400)
        .json({ message: "Status must be 'ACTIVE' or 'INACTIVE'." });
    }

    const filter = status
      ? { userId: parseInt(userId), status: status.toUpperCase() }
      : { userId: parseInt(userId) }; 

    const accounts = await prisma.accounts.findMany({
      where: filter,
    });

    if (accounts.length === 0) {
      return res
        .status(404)
        .json({ message: "No accounts found for this user." });
    }

    return res.status(200).json({
      message: "Accounts retrieved successfully.",
      accounts,
    });
  } catch (error) {
    console.error("Error fetching user accounts:", error);
    return res.status(500).json({
      message: "An error occurred while fetching user accounts.",
      error: error.message,
    });
  }
};
