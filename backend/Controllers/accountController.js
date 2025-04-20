/** @format */

import { PrismaClient } from "../generated/prisma/index.js";
import { hashPassword } from "../utils/passwordHash.js"
const prisma = new PrismaClient();


const validRoles = ["ADMIN", "AGENT", "COMMERCIAL", "SUPERVISOR", "CLIENT"];
const validStatuses = ["ACTIVE", "INACTIVE"];

export async function createAccount(req, res) {
  const { username, password, role } = req.body;
  const { userId } = req.params;
  
  if (!validRoles.includes(role.toUpperCase())) {
    return res.status(400).json({
      error:
        "Invalid role. Must be one of: ADMIN, AGENT, COMMERCIAL, SUPERVISOR, CLIENT",
    });
  }

  try {
    const existingUser = await prisma.users.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }
    const hash = await hashPassword(password);
    const newAccount = await prisma.accounts.create({
      data: {
        username,
        password:hash,
        role: role.toUpperCase(),
        userId: parseInt(userId), 
      },
    });

    return res.status(201).json(newAccount);
  } catch (error) {
    console.error("Error creating account:", error);
    return res.status(500).json({ error: "Failed to create account" });
  }
}

export const getAllAccounts = async (req, res) => {
  try {
    const { status } = req.query;

    let accounts;

    if (status) {
      if (!validStatuses.includes(status.toUpperCase())) {
        return res.status(400).json({
          message: "Invalid status. Must be 'ACTIVE' or 'INACTIVE'.",
        });
      }

      accounts = await prisma.accounts.findMany({
        where: {
          status: status.toUpperCase(),
        },
      });
    } else {
      accounts = await prisma.accounts.findMany();
    }

    return res.status(200).json({ accounts });
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return res.status(500).json({
      message: "An error occurred while fetching accounts.",
    });
  }
};

export async function getAccountById(req, res) {
  const { id } = req.params;
  try {
    const account = await prisma.accounts.findUnique({
      where: {
        account_id: parseInt(id),
      },
    });
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({ error: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch account" });
  }
}

export async function updateAccount(req, res) {
  const { id } = req.params;
  const { username, password, role} = req.body;
  try {
    const updatedAccount = await prisma.accounts.update({
      where: {
        account_id: parseInt(id),
      },
      data: {
        username,
        password, 
        role,
        status: prisma.Status.ACTIVE,
      },
    });
    res.status(200).json(updatedAccount);
  } catch (error) {
    res.status(500).json({ error: "Failed to update account" });
  }
}

export async function deleteAccount(req, res) {
  const { id } = req.params;
  try {
    await prisma.accounts.delete({
      where: {
        account_id: parseInt(id),
      },
    });
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete account" });
  }
}


export async function updateAccountStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ["ACTIVE", "INACTIVE"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      error: "Invalid status. Must be 'ACTIVE' or 'INACTIVE'",
    });
  }

  try {
    const updated = await prisma.accounts.update({
      where: {
        account_id: parseInt(id),
      },
      data: {
        status,
      },
    });

    return res.status(200).json({
      message: "Account status updated successfully",
      account: updated,
    });
  } catch (error) {
    console.error("Error updating account status:", error);
    return res.status(500).json({
      error: "Failed to update account status",
    });
  }
}
