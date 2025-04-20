/** @format */

import express from "express";
import { upload } from "../middlewares/uploadMultiple.js"; 
import {
  updateUser,
  getUserById,
  getAllUsers,
} from "../Controllers/userController.js"; 

const router = express.Router();

router.put("/update/:userId", upload, updateUser);

router.get("/:userId", getUserById);

router.get("/", getAllUsers);


export default router;
