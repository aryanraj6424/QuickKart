// import { Routes, Route } from "react-router-dom";

// import LoginPage from "./pages/auth/LoginPage";
// import SignupPage from "./pages/auth/SignupPage";
// import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
// import OTPVerificationPage from "./pages/auth/OTPVerificationPage";
// import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

// import HomePage from "./components/HomePage";

// // Customer Imports
// import CustomerLayout from "./customer/layouts/CustomerLayout.jsx";
// import CustomerDashboard from "./customer/pages/CustomerDashboard";
// import ProfilePage from "./customer/pages/ProfilePage";
// import AddressesPage from "./customer/pages/AddressesPage";
// import OrdersPage from "./customer/pages/OrdersPage";
// import RefundsPage from "./customer/pages/RefundsPage";
// import SettingsPage from "./customer/pages/SettingsPage";
// import LocationPage from "./customer/pages/LocationPage";
// import CustomerProfilePage from "./customer/pages/profile/CustomerProfilePage";
// import AccountPage from "./customer/pages/profile/AccountPage";
// import OrdersPage from "./customer/pages/profile/OrdersPage";
// import WishlistPage from "./customer/pages/profile/WishlistPage";
// import HelpSupportPage from "./customer/pages/profile/HelpSupportPage";

// function App() {
//   return (
//     <Routes>

//       {/* Public Routes */}

//       <Route
//         path="/"
//         element={<HomePage />}
//       />

//       <Route
//         path="/login"
//         element={<LoginPage />}
//       />

//       <Route
//         path="/signup"
//         element={<SignupPage />}
//       />

//       <Route
//         path="/forgot-password"
//         element={<ForgotPasswordPage />}
//       />

//       <Route
//         path="/verify-otp"
//         element={<OTPVerificationPage />}
//       />

//       <Route
//         path="/reset-password"
//         element={<ResetPasswordPage />}
//       />

//       {/* Customer Routes */}

//       <Route
//         path="/customer"
//         element={<CustomerLayout />}
//       >

//         <Route
//           path="dashboard"
//           element={<CustomerDashboard />}
//         />

//         <Route
//           path="location"
//           element={<LocationPage />}
//         />

//         <Route
//           path="profile"
//           element={<ProfilePage />}
//         />

//         <Route
//           path="addresses"
//           element={<AddressesPage />}
//         />

//         <Route
//           path="orders"
//           element={<OrdersPage />}
//         />

//         <Route
//           path="refunds"
//           element={<RefundsPage />}
//         />

//         <Route
//           path="settings"
//           element={<SettingsPage />}
//         />

//       </Route>

//     </Routes>
//   );
// }

// export default App;


// import { Routes, Route } from "react-router-dom";

// import LoginPage from "./pages/auth/LoginPage";
// import SignupPage from "./pages/auth/SignupPage";
// import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
// import OTPVerificationPage from "./pages/auth/OTPVerificationPage";
// import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

// import HomePage from "./components/HomePage";

// // Customer Imports
// import CustomerLayout from "./customer/layouts/CustomerLayout";
// import CustomerDashboard from "./customer/pages/CustomerDashboard";
// import AddressesPage from "./customer/pages/AddressesPage";
// import RefundsPage from "./customer/pages/RefundsPage";
// import SettingsPage from "./customer/pages/SettingsPage";
// import LocationPage from "./customer/pages/LocationPage";

// // Vendor Imports
// import VendorLayout from "./vendor/layouts/VendorLayout";
// import VendorLogin from "./vendor/pages/auth/VendorLogin";
// import VendorRegister from "./vendor/pages/auth/VendorRegister";
// import VendorDashboard from "./vendor/pages/dashboard/VendorDashboard";
// import VendorProtectedRoute from "./vendor/components/VendorProtectedRoute";
// // Profile Section
// import CustomerProfilePage from "./customer/pages/profile/CustomerProfilePage";
// import AccountPage from "./customer/pages/profile/AccountPage";
// import OrdersPage from "./customer/pages/profile/OrdersPage";
// import WishlistPage from "./customer/pages/profile/WishlistPage";
// import HelpSupportPage from "./customer/pages/profile/HelpSupportPage";

// function App() {
//   return (
//     <Routes>
//       {/* Public Routes */}

//       <Route path="/" element={<HomePage />} />

//       <Route path="/login" element={<LoginPage />} />

//       <Route path="/signup" element={<SignupPage />} />

//       <Route
//         path="/forgot-password"
//         element={<ForgotPasswordPage />}
//       />

//       <Route
//         path="/verify-otp"
//         element={<OTPVerificationPage />}
//       />

//       <Route
//         path="/reset-password"
//         element={<ResetPasswordPage />}
//       />

//       {/* Customer Routes */}

//       <Route
//         path="/customer"
//         element={<CustomerLayout />}
//       >
//         <Route
//           path="dashboard"
//           element={<CustomerDashboard />}
//         />

//         <Route
//           path="location"
//           element={<LocationPage />}
//         />

//         {/* Profile Section */}

//         <Route
//           path="profile"
//           element={<CustomerProfilePage />}
//         />

//         <Route
//           path="account"
//           element={<AccountPage />}
//         />

//         <Route
//           path="orders"
//           element={<OrdersPage />}
//         />

//         <Route
//           path="wishlist"
//           element={<WishlistPage />}
//         />

//         <Route
//           path="support"
//           element={<HelpSupportPage />}
//         />

//         {/* Other Pages */}

//         <Route
//           path="addresses"
//           element={<AddressesPage />}
//         />

//         <Route
//           path="refunds"
//           element={<RefundsPage />}
//         />

//         <Route
//           path="settings"
//           element={<SettingsPage />}
//         />
//       </Route>

//       <Route
//   path="/vendor"
//   element={<VendorLayout />}
// >
//   <Route
//     path="login"
//     element={<VendorLogin />}
//   />

//   <Route
//     path="register"
//     element={<VendorRegister />}
//   />

//   <Route
//     path="dashboard"
//     element={<VendorDashboard />}
//   />
// </Route>
//     </Routes>
//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import OTPVerificationPage from "./pages/auth/OTPVerificationPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

import HomePage from "./components/HomePage";

// Customer Imports
import CustomerLayout from "./customer/layouts/CustomerLayout";
import CustomerDashboard from "./customer/pages/CustomerDashboard";
import AddressesPage from "./customer/pages/AddressesPage";
import RefundsPage from "./customer/pages/RefundsPage";
import SettingsPage from "./customer/pages/SettingsPage";
import LocationPage from "./customer/pages/LocationPage";

// Vendor Imports
import VendorLayout from "./vendor/layouts/VendorLayout";
import VendorLogin from "./vendor/pages/auth/VendorLogin";
import VendorLoginOtp from "./vendor/pages/auth/VendorLoginOtp";
import VendorVerifyLoginOtp from "./vendor/pages/auth/VendorVerifyLoginOtp";
import VendorForgotPassword from "./vendor/pages/auth/VendorForgotPassword";
import VendorResetPassword from "./vendor/pages/auth/VendorResetPassword";
import VendorOtpVerification from "./vendor/pages/auth/VendorOtpVerification";
import PendingApproval from "./vendor/pages/dashboard/PendingApproval";
import VendorRegister from "./vendor/pages/auth/VendorRegister";
import VendorDashboard from "./vendor/pages/dashboard/VendorDashboard";
import VendorProtectedRoute from "./vendor/components/VendorProtectedRoute";


//admin section 
import AdminLogin from "./admin/pages/auth/AdminLogin";
import AdminDashboard from "./admin/pages/dashboard/AdminDashboard";
import AdminLayout from "./admin/layouts/AdminLayout";
import AdminForgotPassword from "./admin/pages/auth/AdminForgotPassword";
import AdminOtpVerification from "./admin/pages/auth/AdminOtpVerification";
import AdminResetPassword from "./admin/pages/auth/AdminResetPassword";
import AdminProtectedRoute from "./admin/components/AdminProtectedRoute";
import VendorManagement from "./admin/pages/dashboard/VendorManagement";


// Profile Section
import CustomerProfilePage from "./customer/pages/profile/CustomerProfilePage";
import AccountPage from "./customer/pages/profile/AccountPage";
import OrdersPage from "./customer/pages/profile/OrdersPage";
import WishlistPage from "./customer/pages/profile/WishlistPage";
import HelpSupportPage from "./customer/pages/profile/HelpSupportPage";

function App() {
  return (
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

      <Route
        path="/verify-otp"
        element={<OTPVerificationPage />}
      />

      <Route
        path="/reset-password"
        element={<ResetPasswordPage />}
      />

      {/* Customer Routes */}

      <Route
        path="/customer"
        element={<CustomerLayout />}
      >
        <Route
          path="dashboard"
          element={<CustomerDashboard />}
        />

        <Route
          path="location"
          element={<LocationPage />}
        />

        {/* Profile Section */}

        <Route
          path="profile"
          element={<CustomerProfilePage />}
        />

        <Route
          path="account"
          element={<AccountPage />}
        />

        <Route
          path="orders"
          element={<OrdersPage />}
        />

        <Route
          path="wishlist"
          element={<WishlistPage />}
        />

        <Route
          path="support"
          element={<HelpSupportPage />}
        />

        {/* Other Pages */}

        <Route
          path="addresses"
          element={<AddressesPage />}
        />

        <Route
          path="refunds"
          element={<RefundsPage />}
        />

        <Route
          path="settings"
          element={<SettingsPage />}
        />
      </Route>

      {/* Vendor Public Routes */}

      <Route
        path="/vendor/login"
        element={<VendorLogin />}
      />
      
      <Route
        path="/vendor/register"
        element={<VendorRegister />}
      />
      
      <Route
        path="/vendor/pending-approval"
        element={<PendingApproval />}
      />
      
      <Route
        path="/vendor/forgot-password"
        element={<VendorForgotPassword />}
      />
      
      <Route
        path="/vendor/login-otp"
        element={<VendorLoginOtp />}
      />
      
      <Route
        path="/vendor/verify-login-otp"
        element={<VendorVerifyLoginOtp />}
      />
      
      <Route
        path="/vendor/verify-otp"
        element={<VendorOtpVerification />}
      />
      
      <Route
        path="/vendor/reset-password"
        element={<VendorResetPassword />}
      />
      
      {/* Vendor Protected Routes */}
      
      <Route
  path="/vendor"
  element={
    <VendorProtectedRoute>
      <VendorLayout />
    </VendorProtectedRoute>
  }
>
  <Route
    path="dashboard"
    element={<VendorDashboard />}
  />

  <Route
    path="products"
    element={<VendorProducts />}
  />

  <Route
    path="orders"
    element={<VendorOrders />}
  />
</Route>


      {/* admin route  */}
      {/* Admin Login */}
       <Route
  path="/admin/login"
  element={<AdminLogin />}
/>

<Route
  path="/admin/forgot-password"
  element={<AdminForgotPassword />}
/>

<Route
  path="/admin/verify-otp"
  element={<AdminOtpVerification />}
/>

<Route
  path="/admin/reset-password"
  element={<AdminResetPassword />}
/>

{/* Protected Admin Routes */}

<Route
  path="/admin"
  element={
    <AdminProtectedRoute>
      <AdminLayout />
    </AdminProtectedRoute>
  }
>
  <Route
    path="dashboard"
    element={<AdminDashboard />}
  />

  <Route
    path="vendors"
    element={<VendorManagement />}
  />
</Route>
      
    </Routes>
  );
}

export default App;
