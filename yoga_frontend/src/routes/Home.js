// HomeComponent.js
import React from "react";
import NavigationComponent from "../components/shared/Navigation";
import SearchSection from "../components/shared/SearchComponent";
import ListingSection from "../components/shared/ListingComponent";
import ListingSectionHome from "../components/shared/ListingSectionHome";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <NavigationComponent />
      <SearchSection />
      <ListingSectionHome />
    </div>
  );
};

export default HomeComponent;
