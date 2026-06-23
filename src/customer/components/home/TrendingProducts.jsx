import { useNavigate } from "react-router-dom";

function TrendingProducts() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Apple",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
      id: 2,
      name: "Banana",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1574226516831-e1dff420e37f",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Trending Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow p-3"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-cover rounded-xl"
            />

            <h3 className="font-semibold mt-3">
              {product.name}
            </h3>

            <p className="text-purple-600 font-bold">
              ₹{product.price}
            </p>

            <button
              onClick={() =>
                navigate("/customer/cart")
              }
              className="w-full mt-3 bg-purple-600 text-white py-2 rounded-xl"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;