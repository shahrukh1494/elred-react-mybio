import "./Resume.scss";
import BackIcon from "../../assets/images/ic_back.svg";
import NoResumeImg from "../../assets/images/no resume.png";
import { useNavigate } from "react-router-dom";

const NoResumeAdded = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="resumeheader">
        <img
          onClick={() => navigate("/")}
          src={BackIcon}
          className="backicon"
          alt="back icon"
        />
        <span className="resumeheadertext">Resume</span>
      </div>
      <img src={NoResumeImg} className="noresumeimg" alt="no resume" />
      <div className="noresumetext">No resume added yet</div>
    </>
  );
};

export default NoResumeAdded;
