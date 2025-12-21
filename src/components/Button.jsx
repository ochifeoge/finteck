import React from "react";

const Button = ({ label, active }) => {
  return (
    <button
      className={`px-4 py-2 capitalize rounded-sm ${
        active
          ? "text-white bg-blue-800"
          : "bg-white border border-gray-600 text-gray-500"
      } font-semibold text-sm cursor-pointer transition duration-300`}>
      {label}
    </button>
  );
};

export default Button;
