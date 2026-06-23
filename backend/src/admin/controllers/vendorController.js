import Vendor from "../../vendor/models/Vendor.js";

// Get Pending Vendors
export const getPendingVendors =
  async (req, res) => {
    try {
      const vendors =
        await Vendor.find({
          status: "pending",
        });

      res.status(200).json({
        success: true,
        vendors,
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

// Approve Vendor
export const approveVendor =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      const vendor =
        await Vendor.findById(id);

      if (!vendor) {
        return res.status(404).json({
          success: false,
          message:
            "Vendor not found",
        });
      }

      vendor.status =
        "approved";

      await vendor.save();

      res.status(200).json({
        success: true,
        message:
          "Vendor approved successfully",
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

// Reject Vendor
export const rejectVendor =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      const vendor =
        await Vendor.findById(id);

      if (!vendor) {
        return res.status(404).json({
          success: false,
          message:
            "Vendor not found",
        });
      }

      vendor.status =
        "rejected";

      await vendor.save();

      res.status(200).json({
        success: true,
        message:
          "Vendor rejected successfully",
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



  // Dashboard Stats

export const getVendorStats =
  async (req, res) => {
    try {

      const totalVendors =
        await Vendor.countDocuments();

      const pendingVendors =
        await Vendor.countDocuments({
          status: "pending",
        });

      const approvedVendors =
        await Vendor.countDocuments({
          status: "approved",
        });

      const rejectedVendors =
        await Vendor.countDocuments({
          status: "rejected",
        });

      res.status(200).json({
        success: true,
        totalVendors,
        pendingVendors,
        approvedVendors,
        rejectedVendors,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };


  // Get All Vendors

export const getAllVendors =
  async (req, res) => {
    try {
      const vendors =
        await Vendor.find()
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        vendors,
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


// Suspend Vendor

export const suspendVendor =
  async (req, res) => {
    try {
      const vendor =
        await Vendor.findById(
          req.params.id
        );

      if (!vendor) {
        return res.status(404).json({
          success: false,
          message:
            "Vendor not found",
        });
      }

      vendor.accountStatus =
        "suspended";

      await vendor.save();

      res.status(200).json({
        success: true,
        message:
          "Vendor suspended successfully",
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


// Activate Vendor

export const activateVendor =
  async (req, res) => {
    try {
      const vendor =
        await Vendor.findById(
          req.params.id
        );

      if (!vendor) {
        return res.status(404).json({
          success: false,
          message:
            "Vendor not found",
        });
      }

      vendor.accountStatus =
        "active";

      await vendor.save();

      res.status(200).json({
        success: true,
        message:
          "Vendor activated successfully",
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


// Hold Vendor

export const holdVendor =
  async (req, res) => {
    try {
      const vendor =
        await Vendor.findById(
          req.params.id
        );

      if (!vendor) {
        return res.status(404).json({
          success: false,
          message:
            "Vendor not found",
        });
      }

      vendor.accountStatus =
        "hold";

      await vendor.save();

      res.status(200).json({
        success: true,
        message:
          "Vendor put on hold",
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


// Deactivate Vendor

export const deactivateVendor =
  async (req, res) => {
    try {
      const vendor =
        await Vendor.findById(
          req.params.id
        );

      if (!vendor) {
        return res.status(404).json({
          success: false,
          message:
            "Vendor not found",
        });
      }

      vendor.accountStatus =
        "deactivated";

      await vendor.save();

      res.status(200).json({
        success: true,
        message:
          "Vendor deactivated successfully",
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



  // Change Vendor Account Status

export const updateVendorAccountStatus =
  async (req, res) => {
    try {

      const { id } = req.params;
      const { accountStatus } = req.body;

      const vendor =
        await Vendor.findById(id);

      if (!vendor) {
        return res.status(404).json({
          success: false,
          message: "Vendor not found",
        });
      }

      vendor.accountStatus =
        accountStatus;

      await vendor.save();

      res.status(200).json({
        success: true,
        message:
          "Account status updated",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });

    }
  };