// import express from "express";

// import {
//   registerVendor,
//   loginVendor,
//   forgotPassword,
//   verifyOtp,
//   resetPassword,
// } from "../controllers/vendorAuthController.js";

// const router = express.Router();

// // Register Vendor
// router.post(
//   "/register",
//   registerVendor
// );

// // Login Vendor
// router.post(
//   "/login",
//   loginVendor
// );

// // Forgot Password
// router.post(
//   "/forgot-password",
//   forgotPassword
// );

// // Verify OTP
// router.post(
//   "/verify-otp",
//   verifyOtp
// );

// // Reset Password
// router.post(
//   "/reset-password",
//   resetPassword
// );

// export default router;



import express from "express";

import {
  registerVendor,
  loginVendor,
  forgotPassword,
  verifyOtp,
  resetPassword,
  sendLoginOtp,
  verifyLoginOtp,
} from "../controllers/vendorAuthController.js";

const router = express.Router();

// Register Vendor
router.post(
  "/register",
  registerVendor
);

// Login Vendor
router.post(
  "/login",
  loginVendor
);

// Login With OTP - Send OTP
router.post(
  "/send-login-otp",
  sendLoginOtp
);

// Login With OTP - Verify OTP
router.post(
  "/verify-login-otp",
  verifyLoginOtp
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