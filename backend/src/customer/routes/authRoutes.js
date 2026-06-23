// import express from "express";

// import {
//   signup,
//   login,
// } from "../controllers/authController.js";

// const router = express.Router();

// /*
// |--------------------------------------------------------------------------
// | Test Route
// |--------------------------------------------------------------------------
// */

// router.get("/test", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Auth Route Working 🚀",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | Auth Routes
// |--------------------------------------------------------------------------
// */

// router.post(
//   "/signup",
//   signup
// );

// router.post(
//   "/login",
//   login
// );

// /*
// |--------------------------------------------------------------------------
// | Future Routes
// |--------------------------------------------------------------------------
// */

// // router.post("/forgot-password", forgotPassword);

// // router.post("/verify-otp", verifyOtp);

// // router.post("/resend-otp", resendOtp);

// // router.post("/reset-password", resetPassword);

// export default router;





// import express from "express";

// import {
//   signup,
//   login,
//   forgotPassword,
// } from "../controllers/authController.js";




// const router = express.Router();

// /*
// |--------------------------------------------------------------------------
// | Test Route
// |--------------------------------------------------------------------------
// */

// router.get("/test", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Auth Route Working 🚀",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | Signup
// |--------------------------------------------------------------------------
// */

// router.post(
//   "/signup",
//   signup
// );

// /*
// |--------------------------------------------------------------------------
// | Login
// |--------------------------------------------------------------------------
// */

// router.post(
//   "/login",
//   login
// );

// /*
// |--------------------------------------------------------------------------
// | Forgot Password
// |--------------------------------------------------------------------------
// */

// /*
//  * Temporary GET Route
//  * Browser se test karne ke liye
//  */



// router.post(
//   "/forgot-password",
//   forgotPassword
// );

// /*
// |--------------------------------------------------------------------------
// | Future Routes
// |--------------------------------------------------------------------------
// */

// // router.post("/verify-otp", verifyOtp);

// // router.post("/resend-otp", resendOtp);

// // router.post("/reset-password", resetPassword);

// export default router;




import express from "express";

import {
  signup,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Test Route
|--------------------------------------------------------------------------
*/

router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Auth Route Working 🚀",
  });
});

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/

router.post("/signup", signup);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

/*
|--------------------------------------------------------------------------
| Future Routes
|--------------------------------------------------------------------------
*/

// router.post("/resend-otp", resendOtp);

// router.post("/reset-password", resetPassword);

export default router;