import PricingCard from "../components/common/PricingCard";
import { plans } from "../utils/Constants";

const PricingPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-PRIMARY mb-6">
        Pricing <span className="text-black"> That Grows With Your Team</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
