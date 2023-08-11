import React from "react";
import MyBioHeader from "../components/MyBioHeader/MyBioHeader";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";

const MyBio = () => {
  return (
    <div>
      <MyBioHeader />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default MyBio;
