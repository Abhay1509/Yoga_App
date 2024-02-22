import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    duration: "",
    teacher: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onFilterChange({ ...selectedFilters, [name]: value });
  };

  return (
    <div className="filter-container bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
      <div className="filter-option mb-4">
        <label
          htmlFor="duration"
          className="block text-gray-700 font-semibold mb-2"
        >
          Duration:
        </label>
        <select
          id="duration"
          name="duration"
          value={selectedFilters.duration}
          onChange={handleFilterChange}
          className="w-full border rounded-lg py-2 px-4 text-gray-700"
        >
          <option value="">All</option>
          <option value="60 minutes">60 minutes</option>
          <option value="75 minutes">75 minutes</option>
          <option value="90 minutes">90 minutes</option>
        </select>
      </div>
      <div className="filter-option">
        <label
          htmlFor="teacher"
          className="block text-gray-700 font-semibold mb-2"
        >
          Teacher:
        </label>
        <input
          type="text"
          id="teacher"
          name="teacher"
          value={selectedFilters.teacher}
          onChange={handleFilterChange}
          className="w-full border rounded-lg py-2 px-4 text-gray-700"
          placeholder="Enter teacher's name"
        />
      </div>
    </div>
  );
};

export default Filter;
