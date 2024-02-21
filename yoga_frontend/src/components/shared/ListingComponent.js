import React from "react";

const ListingSection = ({ yogaClasses = [] }) => {
  return (
    <section className="listing-section bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-4">Yoga Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {yogaClasses.map((yogaClass) => (
          <div key={yogaClass.id} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{yogaClass.className}</h3>
            <p className="text-gray-600">Teacher: {yogaClass.teacher}</p>
            <p className="text-gray-600">Duration: {yogaClass.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListingSection;
