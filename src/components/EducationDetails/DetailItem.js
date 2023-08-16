import ShiledIcon from "../../assets/images/shield icon.svg";
import BlueTickIcon from "../../assets/images/blue tick icon.svg";
import "./EducationDetails.scss";

const DetailItem = ({
  detail,
  name,
  verifiedStatus,
  orgName,
  kycVerifiedStatus,
  currentYear,
}) => {
  return (
    <div className="edcationdetailscontainer">
      <div className="edutitle">
        <div className="areaofstudy">{name}</div>
        {verifiedStatus && (
          <img src={ShiledIcon} alt="shield icon" className="shieldicon" />
        )}
      </div>
      <div className="institution">
        <span className="institutename">{orgName}</span>
        {kycVerifiedStatus && (
          <img
            src={BlueTickIcon}
            alt="blue tick icon"
            className="bluetickicon"
          />
        )}
        |<span className="city">{detail.location.city}</span>
      </div>
      <div className="year">
        {detail.startYear}-
        {detail.endYear === currentYear ? "Present" : detail.endYear}
      </div>
    </div>
  );
};

export default DetailItem;
