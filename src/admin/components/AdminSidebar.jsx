import { useNavigate } from "react-router-dom";

export default function AdminSidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem(
      "adminToken"
    );

    localStorage.removeItem(
      "admin"
    );

    navigate("/admin/login");
  };

  return (
    <div className="w-64 bg-black text-white p-5 flex flex-col">

      <h2 className="text-2xl font-bold mb-8">
        QuickCart Admin
      </h2>

      <nav className="flex flex-col gap-4">

        {/* Dashboard */}

        <button
          onClick={() =>
            navigate(
              "/admin/dashboard"
            )
          }
          className="text-left hover:text-purple-400"
        >
          Dashboard
        </button>

        {/* Vendor Management */}

        <button
          onClick={() =>
            navigate(
              "/admin/vendors"
            )
          }
          className="text-left hover:text-purple-400"
        >
          Vendor Management
        </button>

      </nav>

      {/* Logout */}

      <div className="mt-auto">

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold"
        >
          Logout
        </button>

      </div>

    </div>
  );
}