/** @format */

import express from "express";
import {
  createUserWithAccount,
  updateUserStatus,
  deleteUserAndAccounts,
  getUserAccounts,
} from "../Controllers/userManagerController.js";

const router = express.Router();

router.post("/create", createUserWithAccount);


router.put("/:userId/status", updateUserStatus);


router.delete("/:userId", deleteUserAndAccounts);


router.get("/:userId/accounts", getUserAccounts);

export default router;
