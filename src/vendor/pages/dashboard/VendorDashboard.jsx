export default function VendorDashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Vendor Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5 mt-8">

        <div className="bg-white p-5 rounded-xl shadow">
          Total Products
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          Total Orders
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          Revenue
        </div>

      </div>

    </div>
  );
}