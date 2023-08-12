import MyBioHeader from "../components/MyBioHeader/MyBioHeader";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import AwardsCertificates from "../components/AwardsCertificates/AwardsCertificates";
import EducationDetails from "../components/EducationDetails/EducationDetails";

const MyBio = () => {
  return (
    <>
      <MyBioHeader />
      <AboutMe />
      <Skills />
      <AwardsCertificates />
      <EducationDetails />
    </>
  );
};

export default MyBio;
