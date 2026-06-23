import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

import { generateAdminOtp } from "../utils/generateAdminOtp.js";
import { generateAdminToken } from "../utils/generateAdminToken.js";

// =========================
// Login Admin
// =========================

export const loginAdmin =
  async (req, res) => {
    try {
      const {
        phone,
        password,
      } = req.body;

      const admin =
        await Admin.findOne({
          phone,
        });

      if (!admin) {
        return res.status(404).json({
          success: false,
          message:
            "Admin not found",
        });
      }

      const isMatch =
        await bcrypt.compare(
          password,
          admin.password
        );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid credentials",
        });
      }

      const token =
        generateAdminToken(
          admin._id
        );

      res.status(200).json({
        success: true,
        message:
          "Login Successful",
        token,
        admin,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

// =========================
// Forgot Password
// =========================

export const forgotPassword =
  async (req, res) => {
    try {
      const { phone } =
        req.body;

      const admin =
        await Admin.findOne({
          phone,
        });

      if (!admin) {
        return res.status(404).json({
          success: false,
          message:
            "Admin not found",
        });
      }

      const otp =
        generateAdminOtp();

      admin.otp = otp;

      admin.otpExpiry =
        Date.now() +
        10 * 60 * 1000;

      await admin.save();

      console.log(
        "=================="
      );

      console.log(
        "ADMIN OTP:",
        otp
      );

      console.log(
        "=================="
      );

      res.status(200).json({
        success: true,
        message:
          "OTP sent successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

// =========================
// Verify OTP
// =========================

export const verifyOtp =
  async (req, res) => {
    try {
      const {
        phone,
        otp,
      } = req.body;

      const admin =
        await Admin.findOne({
          phone,
        });

      if (!admin) {
        return res.status(404).json({
          success: false,
          message:
            "Admin not found",
        });
      }

      if (
        admin.otp !== otp
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid OTP",
        });
      }

      if (
        new Date() >
        admin.otpExpiry
      ) {
        return res.status(400).json({
          success: false,
          message:
            "OTP expired",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "OTP verified successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

// =========================
// Reset Password
// =========================

export const resetPassword =
  async (req, res) => {
    try {
      const {
        phone,
        newPassword,
      } = req.body;

      const admin =
        await Admin.findOne({
          phone,
        });

      if (!admin) {
        return res.status(404).json({
          success: false,
          message:
            "Admin not found",
        });
      }

      const hashedPassword =
        await bcrypt.hash(
          newPassword,
          10
        );

      admin.password =
        hashedPassword;

      admin.otp = null;
      admin.otpExpiry = null;

      await admin.save();

      res.status(200).json({
        success: true,
        message:
          "Password reset successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };