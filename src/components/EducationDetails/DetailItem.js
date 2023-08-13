import ShiledIcon from "../../assets/images/shield icon.svg";
import BlueTickIcon from "../../assets/images/blue tick icon.svg";
import "./EducationDetails.scss";

const DetailItem = ({ detail, currentYear }) => {
  return (
    <div className="edcationdetailscontainer">
      <div className="edutitle">
        {detail.areaOfStudy && (
          <div className="areaofstudy">{detail.areaOfStudy}</div>
        )}
        {detail.companyName && (
          <div className="areaofstudy">{detail.companyName}</div>
        )}
        {detail.alumniVerifiedStatus && (
          <img src={ShiledIcon} alt="shield icon" className="shieldicon" />
        )}
        {detail.employeeVerifiedStatus && (
          <img src={ShiledIcon} alt="shield icon" className="shieldicon" />
        )}
      </div>
      <div className="institution">
        {detail.institutionName && (
          <span className="institutename">{detail.institutionName}</span>
        )}
        {detail.companyName && (
          <span className="institutename">{detail.companyName}</span>
        )}
        {detail.institutionKYCVerifiedStatus && (
          <img
            src={BlueTickIcon}
            alt="blue tick icon"
            className="bluetickicon"
          />
        )}
        {detail.orgKYCVerifiedStatus && (
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
