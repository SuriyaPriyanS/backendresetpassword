// Importing required modules using ES Modules syntax
import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import { forgotPassword, getuser, loginUser, registerUser, resetPassword } from "../Controllers/User.js";

// Creating an Express router
const router = express.Router();

// Defining routes
router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.get("/get-user", authMiddleware, getuser);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:id/:token", resetPassword);

// Exporting the router instance
export default router;
