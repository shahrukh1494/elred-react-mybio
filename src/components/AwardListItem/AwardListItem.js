import { useNavigate } from "react-router-dom";
import VerifiedCheckIcon from "../../assets/images/blue tick icon.svg";
import "./AwardListItem.scss";

const AwardListItem = ({ listItem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/my-award-details", { state: listItem })}
      className="listitem"
    >
      <img className="awardicon" src={listItem.awardIconURL} alt="award icon" />
      <div className="d-flex flex-column align-self-center">
        <div className="listitemtitle">{listItem.awardTitle}</div>
        <div className="d-flex">
          <div className="issuedbytext">Issued by : {listItem.issuedBy}</div>
          {listItem.issuedOrgVerifiedStatus && (
            <img
              className="verifiedicon align-self-center"
              src={VerifiedCheckIcon}
              alt="verified"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AwardListItem;
