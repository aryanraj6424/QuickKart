// import mongoose from "mongoose";

// const vendorSchema = new mongoose.Schema(
//   {
//     shopName: {
//       type: String,
//       required: true,
//     },

//     shopType: {
//       type: String,
//       required: true,
//     },

//     yearsInBusiness: {
//       type: Number,
//     },

//     employees: {
//       type: Number,
//     },

//     businessEmail: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     phone: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     whatsapp: {
//       type: String,
//     },

//     address: {
//       village: String,
//       district: String,
//       state: String,
//       pincode: String,
//       country: String,
//     },

//     documents: {
//       businessRegNo: String,
//       gstNumber: String,
//       resellerCertificate: String,
//       aadhaar: String,
//       pan: String,

//       storeFrontImage: String,
//       storeBackImage: String,
//     },

//     password: {
//       type: String,
//       required: true,
//     },

//     otp: {
//   type: String,
//   default: null,
// },

// otpExpiry: {
//   type: Date,
//   default: null,
// },

//     status: {
//       type: String,
//       enum: [
//         "pending",
//         "approved",
//         "rejected",
//       ],
//       default: "pending",
//     },

//     assignedArea: {
//       type: String,
//       default: null,
//     },

    

//     assignedRadius: {
//       type: Number,
//       default: null,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model(
//   "Vendor",
//   vendorSchema
// );


import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },

    shopType: {
      type: String,
      required: true,
    },

    yearsInBusiness: {
      type: Number,
    },

    employees: {
      type: Number,
    },

    businessEmail: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    whatsapp: {
      type: String,
    },

    address: {
      village: String,
      district: String,
      state: String,
      pincode: String,
      country: String,
    },

    documents: {
      businessRegNo: String,
      gstNumber: String,
      resellerCertificate: String,
      aadhaar: String,
      pan: String,

      storeFrontImage: String,
      storeBackImage: String,
    },

    password: {
      type: String,
      required: true,
    },

    otp: {
      type: String,
      default: null,
    },

    otpExpiry: {
      type: Date,
      default: null,
    },

    // Registration Approval Status
    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected",
      ],
      default: "pending",
    },

    // Account Control Status
    accountStatus: {
      type: String,
      enum: [
        "active",
        "hold",
        "suspended",
        "deactivated",
      ],
      default: "active",
    },

    assignedArea: {
      type: String,
      default: null,
    },

    assignedRadius: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Vendor",
  vendorSchema
);