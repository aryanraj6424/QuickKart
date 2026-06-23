export const getVendorDashboard =
  async (req, res) => {
    try {
      res.status(200).json({
        success: true,
        message:
          "Vendor Dashboard Data",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };