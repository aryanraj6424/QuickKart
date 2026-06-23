export default function OrdersPage() {

  const orders = [
    {
      id: "QC1001",
      amount: 499,
      status: "Delivered",
    },
    {
      id: "QC1002",
      amount: 899,
      status: "Processing",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">

      <h2 className="text-2xl font-bold mb-5">
        My Orders
      </h2>

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow p-5"
          >
            <h3 className="font-bold">
              Order #{order.id}
            </h3>

            <p>
              ₹{order.amount}
            </p>

            <p className="text-green-600">
              {order.status}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}