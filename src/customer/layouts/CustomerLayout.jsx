// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// import DesktopNavbar from "../components/navbar/DesktopNavbar";
// import MobileTopNavbar from "../components/navbar/MobileTopNavbar";
// import MobileBottomNavbar from "../components/navbar/MobileBottomNavbar";

// export default function CustomerLayout() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const selectedAddress = JSON.parse(
//       localStorage.getItem("selectedAddress")
//     );

//     const allowedRoutes = [
//       "/customer/location",
//       "/customer/addresses",
//     ];

//     if (
//       !selectedAddress &&
//       !allowedRoutes.includes(location.pathname)
//     ) {
//       navigate("/customer/location");
//     }
//   }, [location.pathname, navigate]);

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* Desktop Navbar */}
//       <div className="hidden lg:block">
//         <DesktopNavbar />
//       </div>

//       {/* Mobile Navbar */}
//       <div className="lg:hidden">
//         <MobileTopNavbar />
//       </div>

//       {/* Main Content */}
//       <main className="max-w-[1400px] mx-auto px-4 lg:px-6 pb-20 lg:pb-6">
//         <Outlet />
//       </main>

//       {/* Mobile Bottom Navigation */}
//       <div className="lg:hidden">
//         <MobileBottomNavbar />
//       </div>

//     </div>
//   );
// }




import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import DesktopNavbar from "../components/navbar/DesktopNavbar";
import MobileTopNavbar from "../components/navbar/MobileTopNavbar";
import MobileBottomNavbar from "../components/navbar/MobileBottomNavbar";

export default function CustomerLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const selectedAddress = JSON.parse(
      localStorage.getItem("selectedAddress")
    );

    const allowedRoutes = [
      "/customer/location",
      "/customer/addresses",
    ];

    if (
      !selectedAddress &&
      !allowedRoutes.includes(location.pathname)
    ) {
      navigate("/customer/location");
    }
  }, [location.pathname, navigate]);

  // Hide Mobile Top Navbar on Profile Related Pages
  const hideMobileTopNavbar = [
    "/customer/profile",
    "/customer/account",
    "/customer/orders",
    "/customer/wishlist",
    "/customer/support",
  ].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>

      {/* Mobile Navbar */}
      {!hideMobileTopNavbar && (
        <div className="lg:hidden">
          <MobileTopNavbar />
        </div>
      )}

      {/* Main Content */}
      <main
        className={`
          mx-auto
          px-4
          lg:px-6
          pb-20
          lg:pb-6
          ${
            hideMobileTopNavbar
              ? "max-w-md"
              : "max-w-[1400px]"
          }
        `}
      >
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <MobileBottomNavbar />
      </div>

    </div>
  );
}