
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import locationRoutes from "./customer/routes/locationRoutes.js";
import authRoutes from "./customer/routes/authRoutes.js";
import addressRoutes from "./customer/routes/addressRoutes.js";
//vender
import vendorAuthRoutes from "./vendor/routes/vendorAuthRoutes.js";
import vendorRoutes from "./vendor/routes/vendorRoutes.js";
//admin
import adminAuthRoutes from "./admin/routes/adminAuthRoutes.js";
import adminVendorRoutes from "./admin/routes/vendorRoutes.js";
const app = express();

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5000",
    ],
    credentials: true,
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use(express.json());

app.use(cookieParser());

/*
|--------------------------------------------------------------------------
| Test Route
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "QuickCart Backend Running 🚀",
  });
});

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/

app.use("/api/auth", authRoutes);

//vender routes

app.use(
  "/api/vendor/auth",
  vendorAuthRoutes
);

app.use(
  "/api/vendor",
  vendorRoutes
);


//admin route
app.use(
  "/api/admin/auth",
  adminAuthRoutes
);

// addressRoutes

app.use(
  "/api/address",
  addressRoutes
);

app.use(
  "/api/admin/vendors",
  adminVendorRoutes
);

// location api

app.use("/api/location", locationRoutes);



/*
|--------------------------------------------------------------------------
| 404 Route
|--------------------------------------------------------------------------
*/
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;