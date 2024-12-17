import React from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-10">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;