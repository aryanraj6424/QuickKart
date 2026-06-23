// import mongoose from "mongoose";

// const userSchema =
//   new mongoose.Schema(
//     {
//       fullName: {
//         type: String,
//         required: true,
//       },

//       phoneNumber: {
//         type: String,
//         required: true,
//         unique: true,
//       },

//       email: {
//         type: String,
//       },

//       password: {
//         type: String,
//         required: true,
//       },

//       otp: {
//         type: String,
//       },

//       otpExpires: {
//         type: Date,
//       },
//     },
//     {
//       timestamps: true,
//     }
//   );

// export default mongoose.model(
//   "User",
//   userSchema
// );


import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      required: true,
    },

    otp: {
      type: String,
      default: null,
    },

    otpExpires: {
      type: Date,
      default: null,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User ||
  mongoose.model(
    "User",
    userSchema
  );

export default User;