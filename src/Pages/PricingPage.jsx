import React from "react";
import PricingCard from "../components/common/PricingCard";

const PricingPage = () => {
  const plans = [
    {
      title: "Free",
      price: 0,
      description: "For individuals and small teams",
      features: [
        "3 Projects",
        "5 Members per project",
        "Basic task & Kanban",
        "Chat and file sharing",
      ],
    },
    {
      title: "Pro",
      price: 9,
      description: "Best for growing teams",
      highlight: true,
      features: [
        "Unlimited Projects",
        "Unlimited Members",
        "Advanced reporting",
        "Priority support",
      ],
    },
    {
      title: "Premium",
      price: 19,
      description: "All-in-one solution for power users and enterprises",
      features: [
        "Unlimited everything",
        "Custom integrations & API access",
        "Advanced analytics & audit logs",
        "Dedicated account manager",
        "Premium support & SLA",
      ],
      highlight: false, // Optional: set to true if you want to highlight this plan
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-violet-600 mb-6">
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
