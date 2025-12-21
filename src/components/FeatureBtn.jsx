import React from "react";

const FeatureBtn = ({ label }) => {
  return (
    <span className="bg-blue-300 text-gray-600 rounded-2xl capitalize px-2 py-1 text-sm">
      {label}
    </span>
  );
};

export default FeatureBtn;
