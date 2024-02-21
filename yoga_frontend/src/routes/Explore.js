import React, { useState } from "react";
import Filter from "../components/shared/Filter";
import ListingSection from "../components/shared/ListingComponent";
import { Link } from "react-router-dom";

const Explore = () => {
  // Dummy data for yoga classes
  const [yogaClasses, setYogaClasses] = useState([
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
  ]);

  const [filteredYogaClasses, setFilteredYogaClasses] = useState(yogaClasses); // Initialize filteredYogaClasses with all yogaClasses

  const handleFilterChange = (filters) => {
    // Filter yoga classes based on selected filters
    const filteredClasses = yogaClasses.filter((yogaClass) => {
      // Filter by duration
      if (filters.duration && yogaClass.duration !== filters.duration) {
        return false;
      }
      // Filter by teacher
      if (
        filters.teacher &&
        !yogaClass.teacher.toLowerCase().includes(filters.teacher.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setFilteredYogaClasses(filteredClasses);
  };

  return (
    <div className="explore-container flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/4">
        <Filter onFilterChange={handleFilterChange} />
        {/* Button to return back to home */}
        <Link to="/home" className="block mt-4 text-blue-500">
          Back to Home
        </Link>
      </div>
      <div className="w-full md:w-3/4">
        <ListingSection yogaClasses={filteredYogaClasses} />
      </div>
    </div>
  );
};

export default Explore;
