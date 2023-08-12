import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import useDataFetch from "../../customHooks/useDataFetch";
import SkillsContainer from "./SkillsContainer";

const Skills = () => {
  const API_ENDPOINT = "noSessionViewMyBioSkills?userCode=";
  const USER_CODE = "63aad78bb38aa1d755b49561";

  const [data, loading, error] = useDataFetch(API_ENDPOINT + USER_CODE, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError />;

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
