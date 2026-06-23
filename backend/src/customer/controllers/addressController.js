import Address from "../models/Address.js";

export const createAddress = async (
  req,
  res
) => {
  try {
    const address =
      await Address.create(req.body);

    res.status(201).json({
      success: true,
      address,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const getUserAddresses = async (
  req,
  res
) => {
  try {

    const addresses =
      await Address.find({
        userId: req.params.userId,
      });

    res.status(200).json({
      success: true,
      addresses,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


export const deleteAddress =
  async (req, res) => {

    try {

      await Address.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Address Deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};