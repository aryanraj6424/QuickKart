import express from "express";

import {
  loginAdmin,
  forgotPassword,
  verifyOtp,
  resetPassword,
} from "../controllers/adminAuthController.js";

const router =
  express.Router();

// Admin Login
router.post(
  "/login",
  loginAdmin
);

// Forgot Password
router.post(
  "/forgot-password",
  forgotPassword
);

// Verify OTP
router.post(
  "/verify-otp",
  verifyOtp
);

// Reset Password
router.post(
  "/reset-password",
  resetPassword
);

export default router;