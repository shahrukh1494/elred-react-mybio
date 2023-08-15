import "./AwardsList.scss";
import BackIcon from "../../assets/images/ic_back.svg";
import SearchIcon from "../../assets/images/search icon.svg";
import { useNavigate } from "react-router-dom";

const AwardsHeader = ({ headerText, searchIcon = true }) => {
  const navigate = useNavigate();

  return (
    <div className="awardsheader">
      <div className="d-flex align-items-center">
        <img
          src={BackIcon}
          onClick={() => navigate(-1)}
          className="backicon"
          alt="back icon"
        />
        <div className="awardsheadertext">{headerText}</div>
      </div>
      {searchIcon && (
        <img src={SearchIcon} className="searchicon" alt="search icon" />
      )}
    </div>
  );
};

export default AwardsHeader;
