import React from "react";

const PricingCard = ({ title, price, description, features, highlight }) => {
  return (
    <div
      className={`border border-gray-200 p-6 rounded shadow-sm ${
        highlight ? "border-violet-600 border-2 shadow-md" : ""
      }`}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {typeof price === "string" ? (
        <p className="text-xl font-semibold text-violet-600 mb-4">{price}</p>
      ) : (
        <p className="text-3xl font-bold text-violet-600 mb-4">
          ${price}
          <span className="text-base font-medium">/user/month</span>
        </p>
      )}
      <ul className="text-sm text-gray-700 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
