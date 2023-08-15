import "./AboutMe.scss";
import ForwardIcon from "../../assets/images/ic_forward.svg";
import ResumeIcon from "../../assets/images/Group 13795.png";
import useDataFetch from "../../customHooks/useDataFetch";
import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import { useNavigate } from "react-router-dom";
import userContext from "../UserContext";
import { useContext } from "react";

const API_ENDPOINT = "noSessionViewMyBio?userCode=";

const AboutMe = () => {
  const { userCode } = useContext(userContext);
  const navigate = useNavigate();

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

  const navigateToResume = () => {
    navigate("/view-resume", { state: data.result[0] });
  };

  return (
    <div className="aboutmecontainer">
      <div className="aboutmeheader">About me</div>
      <div
        className={`${
          aboutUser ? "aboutmetext" : " text-center text-secondary pt-2 pb-5"
        }`}
      >
        {aboutUser.trim() || "No about me added yet"}
      </div>
      <div className="bloodgroup d-flex justify-content-between">
        <span className="bloodgrouptext">Blood group</span>
        <span className="bloodgrouptype">{bloodGroupValue}</span>
      </div>
      <div
        onClick={navigateToResume}
        className="resumebox d-flex justify-content-between"
      >
        <div className="resumeheader">
          <img src={ResumeIcon} alt="resume icon" className="resumeicon" />
          <span className="resumetext">Resume</span>
        </div>
        <img src={ForwardIcon} alt="forward icon" className="forwardicon" />
      </div>
    </div>
  );
};

export default AboutMe;
