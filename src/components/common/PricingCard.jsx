import React from "react";

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  highlight,
}) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-md border ${
        highlight ? "border-PRIMARY " : "border-gray-200"
      }`}
    >
      <h2 className="text-xl font-semibold text-PRIMARY">{title}</h2>
      <p className="text-3xl font-bold mt-2">${price}</p>
      <p className="text-gray-600 mt-1">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>

      {buttonText && (
        <button
          className={`mt-6 w-full py-2 px-4 rounded-md font-medium transition ${
            highlight
              ? "bg-PRIMARY text-white hover:bg-PRIMARY-600"
              : "bg-PRIMARY text-white hover:bg-PRIMARY-600"
          }`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default PricingCard;
