import "./AwardsList.scss";
import VerifiedCheckIcon from "../../assets/images/blue tick icon.svg";
import { useNavigate } from "react-router-dom";

const AwardsListView = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="listcontainer">
      {data?.map((listItem) => (
        <div
          onClick={() => navigate("/my-award-details", { state: listItem })}
          key={listItem.awardId + Math.random()}
          className="listitem"
        >
          <img
            className="awardicon"
            src={listItem.awardIconURL}
            alt="award icon"
          />
          <div className="d-flex flex-column">
            <div className="listitemtitle">{listItem.awardTitle}</div>
            <div className="d-flex">
              <div className="issuedbytext">
                Issued by : {listItem.issuedBy}
              </div>
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
      ))}
    </div>
  );
};

export default AwardsListView;
