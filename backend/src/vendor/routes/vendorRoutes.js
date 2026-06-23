import express from "express";

import {
  getVendorDashboard,
} from "../controllers/vendorController.js";

const router =
  express.Router();

router.get(
  "/dashboard",
  getVendorDashboard
);

export default router;