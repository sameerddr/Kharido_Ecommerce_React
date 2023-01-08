import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import { AppContext, useProductContext } from "./context/Productcontext";

const About = () => {
  const data = {
    name: "Baniya ecommerce",
  };

  const { myName } = useProductContext();
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
