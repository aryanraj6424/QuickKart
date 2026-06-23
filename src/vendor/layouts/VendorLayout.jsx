import { Outlet } from "react-router-dom";
import VendorSidebar from "../components/VendorSidebar";

export default function VendorLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      <VendorSidebar />

      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
}