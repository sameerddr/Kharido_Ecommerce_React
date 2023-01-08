import React from "react";
import HeroSection from "./HeroSection";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
  const data = {
    name: "Sameer Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
    </>
  );
};

export default Home;
