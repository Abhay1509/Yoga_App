import React from "react";

const ListingSectionHome = () => {
  // Dummy data for yoga classes
  const yogaClasses = [
    {
      id: 1,
      teacher: "John Doe",
      className: "Beginner Yoga",
      duration: "60 minutes",
    },
    {
      id: 2,
      teacher: "Jane Smith",
      className: "Intermediate Yoga",
      duration: "75 minutes",
    },
    {
      id: 3,
      teacher: "Michael Johnson",
      className: "Advanced Yoga",
      duration: "90 minutes",
    },
    {
      id: 4,
      teacher: "Emily Brown",
      className: "Vinyasa Flow",
      duration: "60 minutes",
    },
    {
      id: 5,
      teacher: "David Wilson",
      className: "Hatha Yoga",
      duration: "75 minutes",
    },
    {
      id: 6,
      teacher: "Jessica Taylor",
      className: "Yin Yoga",
      duration: "60 minutes",
    },
    {
      id: 7,
      teacher: "Christopher Lee",
      className: "Power Yoga",
      duration: "75 minutes",
    },
    {
      id: 8,
      teacher: "Emma Martinez",
      className: "Restorative Yoga",
      duration: "90 minutes",
    },
    {
      id: 9,
      teacher: "Daniel Anderson",
      className: "Ashtanga Yoga",
      duration: "60 minutes",
    },
    {
      id: 10,
      teacher: "Olivia Garcia",
      className: "Kundalini Yoga",
      duration: "75 minutes",
    },
    {
      id: 11,
      teacher: "Matthew Rodriguez",
      className: "Bikram Yoga",
      duration: "90 minutes",
    },
    {
      id: 12,
      teacher: "Sophia Hernandez",
      className: "Iyengar Yoga",
      duration: "60 minutes",
    },
    {
      id: 13,
      teacher: "Ethan Moore",
      className: "Yoga for Beginners",
      duration: "75 minutes",
    },
    {
      id: 14,
      teacher: "Isabella King",
      className: "Yoga for Stress Relief",
      duration: "60 minutes",
    },
    {
      id: 15,
      teacher: "Aiden Lewis",
      className: "Yoga for Flexibility",
      duration: "75 minutes",
    },
    {
      id: 16,
      teacher: "Mia Allen",
      className: "Yoga for Strength",
      duration: "90 minutes",
    },
    {
      id: 17,
      teacher: "James Green",
      className: "Yoga for Weight Loss",
      duration: "60 minutes",
    },
    {
      id: 18,
      teacher: "Ava Hall",
      className: "Yoga for Athletes",
      duration: "75 minutes",
    },
    {
      id: 19,
      teacher: "Noah Young",
      className: "Yoga for Seniors",
      duration: "60 minutes",
    },
    {
      id: 20,
      teacher: "Liam Perez",
      className: "Yoga for Children",
      duration: "75 minutes",
    },
  ];

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

export default ListingSectionHome;

