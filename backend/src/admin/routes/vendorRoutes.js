// import express from "express";

// import {
//   getPendingVendors,
//   approveVendor,
//   rejectVendor,
// } from "../controllers/vendorController.js";

// const router =
//   express.Router();

// router.get(
//   "/pending",
//   getPendingVendors
// );

// router.put(
//   "/approve/:id",
//   approveVendor
// );

// router.put(
//   "/reject/:id",
//   rejectVendor
// );

// export default router;


import express from "express";

import {
  getPendingVendors,
  approveVendor,
  rejectVendor,
  getVendorStats,
  getAllVendors,
  suspendVendor,
  activateVendor,
  holdVendor,
  deactivateVendor,
  updateVendorAccountStatus,
} from "../controllers/vendorController.js";

const router =
  express.Router();

// Dashboard Stats

router.get(
  "/stats",
  getVendorStats
);

// All Vendors

router.get(
  "/all",
  getAllVendors
);

// Pending Vendors

router.get(
  "/pending",
  getPendingVendors
);

// Approval Actions

router.put(
  "/approve/:id",
  approveVendor
);

router.put(
  "/reject/:id",
  rejectVendor
);

// Account Control Actions

router.put(
  "/suspend/:id",
  suspendVendor
);

router.put(
  "/activate/:id",
  activateVendor
);

router.put(
  "/hold/:id",
  holdVendor
);

router.put(
  "/deactivate/:id",
  deactivateVendor
);

router.put(
  "/account-status/:id",
  updateVendorAccountStatus
);

export default router;