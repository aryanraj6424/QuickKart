const categories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Snacks",
  "Cold Drinks",
  "Bakery",
  "Personal Care",
  "Household",
];

function CategorySection() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Categories
      </h2>

      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white p-4 rounded-2xl shadow text-center cursor-pointer hover:shadow-lg"
          >
            <div className="text-2xl mb-2">
              🛒
            </div>

            <p className="text-sm font-medium">
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;