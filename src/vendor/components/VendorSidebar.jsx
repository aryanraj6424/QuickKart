import { Link } from "react-router-dom";

export default function VendorSidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-5">

      <h2 className="text-2xl font-bold text-purple-600 mb-8">
        Vendor Panel
      </h2>

      <div className="space-y-3">

        <Link
          to="/vendor/dashboard"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Dashboard
        </Link>

      </div>

    </div>
  );
}