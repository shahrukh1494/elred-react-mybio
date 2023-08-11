import "./MyBioHeader.scss";
import BackIcon from "../../assets/images/ic_back.svg";

const MyBioHeader = () => {
  return (
    <div className="headercontainer">
      <img src={BackIcon} alt="back icon" className="headerbackicon" />
      <span className="bioheadertext">My Bio</span>
    </div>
  );
};

export default MyBioHeader;
