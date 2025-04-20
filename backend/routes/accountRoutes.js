/** @format */

import {Router} from "express";
import {
  createAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
  updateAccountStatus,
} from "../Controllers/accountController.js"; 

const router = Router();

router.post("/create/:userId", createAccount);

router.get("/", getAllAccounts);

router.get("/:id", getAccountById);

router.put("/:id", updateAccount);

router.delete("/:id", deleteAccount);

router.patch("/:id/status", updateAccountStatus);

export default router;
