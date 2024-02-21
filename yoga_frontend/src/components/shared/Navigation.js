import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <nav className="navigation bg-gray-800 text-white p-4">
      <div className="logo flex items-center">
        <Icon icon="guidance:yoga" width={50} className="mr-2" />
        <span className="text-xl font-bold">YOGA APP</span>
      </div>
      <div className="buttons">
        <Link
          to="/explore"
          className="explore-button bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mr-4"
        >
          Explore
        </Link>
        <Link
          to="/login"
          className="login-button bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavigationComponent;
