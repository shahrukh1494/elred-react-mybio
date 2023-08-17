import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import useDataFetch from "../../customHooks/useDataFetch";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import { useContext } from "react";
import UserContext from "../UserContext";

const API_ENDPOINT = "noSessionViewMyBioSkills?userCode=";

const Skills = () => {
  const { userCode } = useContext(UserContext);
  const [data, loading, error] = useDataFetch(API_ENDPOINT + userCode, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="Skills" />;

  const { skills, hobbies, subjects } = data.result[0];

  return (
    <>
      <SkillsContainer
        skillsHeader="Skills"
        subHeader="I am incredible at these skills /professionally great at"
        pillValues={skills}
        notAddedText="No skills added yet"
      />
      <SkillsContainer
        subHeader="Hobbies i am passionate about"
        pillValues={hobbies}
        notAddedText="No hobbies added yet"
      />
      <SkillsContainer
        subHeader="My favourite subjects are"
        pillValues={subjects}
        notAddedText="No subjects added yet"
      />
    </>
  );
};

export default Skills;
