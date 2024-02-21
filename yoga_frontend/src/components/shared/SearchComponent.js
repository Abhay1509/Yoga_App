import React from "react";

const SearchSection = () => {
  return (
    <section className="search-section bg-gray-200 py-8">
      <div className="full-screen-banner bg-gray-500 h-64 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">
          Find Your Perfect Yoga Class
        </h2>
      </div>
      <div className="search-box mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search for yoga classes"
          className="w-1/2 p-4 border border-gray-400 rounded-lg focus:outline-none"
        />
      </div>
    </section>
  );
};

export default SearchSection;
