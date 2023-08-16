import "./AboutMe.scss";
import useDataFetch from "../../customHooks/useDataFetch";
import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import UserContext from "../UserContext";
import { useContext } from "react";
import ResumeSection from "./ResumeSection";

const API_ENDPOINT = "noSessionViewMyBio?userCode=";

const AboutMe = () => {
  const { userCode } = useContext(UserContext);
  const [data, loading, error] = useDataFetch(API_ENDPOINT + userCode, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="About me" />;

  const { aboutUser, bloodGroup } = data.result[0];
  let bloodGroupValue = "- ";
  if (bloodGroup.trim().length > 1 && bloodGroup[bloodGroup.length - 1] === "+")
    bloodGroupValue = `${bloodGroup} (Positive)`;
  if (bloodGroup.trim().length > 1 && bloodGroup[bloodGroup.length - 1] === "-")
    bloodGroupValue = `${bloodGroup} (Negative)`;

  return (
    <div className="aboutmecontainer">
      <div className="aboutmeheader">About me</div>
      <div
        className={`${
          aboutUser.trim() ? "aboutmetext" : "text-center text-secondary py-2"
        }`}
      >
        {aboutUser.trim() || (
          <div className="text-center text-secondary pt-2 pb-5">
            No about me added yet
          </div>
        )}
      </div>
      <div className="bloodgroup d-flex justify-content-between">
        <span className="bloodgrouptext">Blood group</span>
        <span className="bloodgrouptype">{bloodGroupValue}</span>
      </div>
      <ResumeSection data={data} />
    </div>
  );
};

export default AboutMe;
