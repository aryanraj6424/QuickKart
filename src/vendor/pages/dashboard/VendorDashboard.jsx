import { useNavigate } from "react-router-dom";

export default function VendorDashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem(
      "vendorToken"
    );

    localStorage.removeItem(
      "vendor"
    );

    navigate("/vendor/login");
  };

  return (
    <div>

      {/* Header */}

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Vendor Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold"
        >
          Logout
        </button>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

        <div className="bg-white p-5 rounded-xl shadow">

          <p className="text-gray-500">
            Total Products
          </p>

          <h2 className="text-3xl font-bold mt-2">
            0
          </h2>

        </div>

        <div className="bg-white p-5 rounded-xl shadow">

          <p className="text-gray-500">
            Total Orders
          </p>

          <h2 className="text-3xl font-bold mt-2">
            0
          </h2>

        </div>

        <div className="bg-white p-5 rounded-xl shadow">

          <p className="text-gray-500">
            Revenue
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹0
          </h2>

        </div>

      </div>

    </div>
  );
}
