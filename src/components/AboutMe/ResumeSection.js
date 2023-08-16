import "./AboutMe.scss";
import ForwardIcon from "../../assets/images/ic_forward.svg";
import ResumeIcon from "../../assets/images/Group 13795.png";
import { useNavigate } from "react-router-dom";

const ResumeSection = ({ data }) => {
  const navigate = useNavigate();

  const navigateToResume = () => {
    navigate("/view-resume", { state: data.result[0] });
  };

  return (
    <div
      onClick={navigateToResume}
      className="resumebox d-flex justify-content-between"
    >
      <div className="resumeheadertext">
        <img src={ResumeIcon} alt="resume icon" className="resumeicon" />
        <span className="resumetext">Resume</span>
      </div>
      <img src={ForwardIcon} alt="forward icon" className="forwardicon" />
    </div>
  );
};

export default ResumeSection;
