
import HeroBanner from "../components/home/HeroBanner";
import CategorySection from "../components/home/CategorySection";
import TrendingProducts from "../components/home/TrendingProducts";

function CustomerDashboard() {
  return (
    <div className="space-y-8 py-6">

      <HeroBanner />

      <CategorySection />

      <TrendingProducts />

    </div>
  );
}

export default CustomerDashboard;