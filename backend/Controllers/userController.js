
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "../generated/prisma/index.js";
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

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
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
    } = req.body;

    const user = await prisma.users.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const defaultImageUrl = getFullUrl(req, "uploads/images/default-image.jpg");
    const defaultLogoUrl = getFullUrl(req, "uploads/images/default-logo.jpg");

    if (req.files?.image) {
      const newImageUrl = getFullUrl(
        req,
        `uploads/images/users/${req.files.image[0].filename}`
      );
      if (user.image && user.image !== defaultImageUrl) {
        const oldImagePath = `.${new URL(user.image).pathname}`;
        if (fileExists(oldImagePath)) {
          fs.unlinkSync(oldImagePath); 
        }
      }
    }

    if (req.files?.logo) {
      const newLogoUrl = getFullUrl(
        req,
        `uploads/images/logos/societyLogos/${req.files.logo[0].filename}`
      );
      if (user.logo && user.logo !== defaultLogoUrl) {
        const oldLogoPath = `.${new URL(user.logo).pathname}`;
        if (fileExists(oldLogoPath)) {
          fs.unlinkSync(oldLogoPath); 
        }
      }
    }

    const updatedImageUrl = req.files?.image
      ? getFullUrl(req, `uploads/images/users/${req.files.image[0].filename}`)
      : user.image || defaultImageUrl; 

    const updatedLogoUrl = req.files?.logo
      ? getFullUrl(
          req,
          `uploads/images/logos/societyLogos/${req.files.logo[0].filename}`
        )
      : user.logo || defaultLogoUrl;

    const updatedUser = await prisma.users.update({
      where: { id: parseInt(userId) },
      data: {
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        fullName: fullName || user.fullName,
        email: email || user.email,
        phone: phone || user.phone,
        societyName: societyName || user.societyName,
        departementCode: departementCode || user.departementCode,
        departementName: departementName || user.departementName,
        siret: siret || user.siret,
        image: updatedImageUrl, 
        logo: updatedLogoUrl, 
      },
    });

    return res.status(200).json({
      message: "User updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating the user." });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await prisma.users.findUnique({
      where: { id: parseInt(userId) },
      include: {
        accounts: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching the user." });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const { status } = req.query;

    let users;

    if (status) {
      const validStatuses = ["ACTIVE", "INACTIVE"];
      if (!validStatuses.includes(status.toUpperCase())) {
        return res
          .status(400)
          .json({ message: "Invalid status. Must be 'ACTIVE' or 'INACTIVE'." });
      }

      users = await prisma.users.findMany({
        where: {
          userStatus: status.toUpperCase(),
        },
      });
    } else {
      users = await prisma.users.findMany(); 
    }

    return res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching users." });
  }
};

