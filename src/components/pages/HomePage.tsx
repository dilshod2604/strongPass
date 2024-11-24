import React from "react";
import Welcome from "./HomePageSections/Welcome";
import HomeProducts from "./HomePageSections/HomeProducts";
import AboutPassword from "./HomePageSections/AboutPassword";
import QuestionForm from "../Layout/ui/questionForm/QuestionForm";

const HomePage = () => {
  return (
    <>
      <Welcome/>
      <HomeProducts/>
      <AboutPassword/>
      <QuestionForm/>
    </>
  );
};

export default HomePage;
