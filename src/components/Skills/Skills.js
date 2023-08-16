import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import useDataFetch from "../../customHooks/useDataFetch";
import SkillsContainer from "./SkillsContainer";
import { useContext } from "react";
import userContext from "../UserContext";

const API_ENDPOINT = "noSessionViewMyBioSkills?userCode=";

const Skills = () => {
  const { userCode } = useContext(userContext);
  const [data, loading, error] = useDataFetch(API_ENDPOINT + userCode, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="Skills" />;

  const { skills, hobbies, subjects } = data.result[0];
  const skillsSubheader =
    "I am incredible at these skills /professionally great at";
  const noSkills = "No skills added yet";
  const hobbiesSubheader = "Hobbies i am passionate about";
  const noHobbies = "No hobbies added yet";
  const header = "Skills";
  const subjectsSubheader = "My favourite subjects are";
  const noSubjects = "No subjects added yet";

  return (
    <>
      <SkillsContainer
        skillsHeader={header}
        subHeader={skillsSubheader}
        pillValues={skills}
        notAddedText={noSkills}
      />
      <SkillsContainer
        subHeader={hobbiesSubheader}
        pillValues={hobbies}
        notAddedText={noHobbies}
      />
      <SkillsContainer
        subHeader={subjectsSubheader}
        pillValues={subjects}
        notAddedText={noSubjects}
      />
    </>
  );
};

export default Skills;
