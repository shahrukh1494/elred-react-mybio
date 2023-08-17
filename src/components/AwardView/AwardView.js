import "./AwardView.scss";
import { useLocation } from "react-router-dom";
import CheckIcon from "../../assets/images/blue tick icon.svg";
import { convertDateFormat } from "../Functions/DateFormat";
import AwardPreviewCard from "../AwardPreviewCard/AwardPreviewCard";

const AwardView = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div className="awardtitle">{data.awardTitle} </div>
      <img src={data.awardIconURL} className="awardiconbig" alt="award icon" />
      <div className="awarddetailcontainer">
        <div className="d-flex">
          <span className="description">Description</span>
          <span className="separator"> : </span>
          <span className="supportingtext">{data.description}</span>
        </div>
        <div className="d-flex">
          <span className="issuedate">Issue date</span>
          <span className="separator"> : </span>
          <span className="supportingtext">
            {convertDateFormat(data.issuedDate)}
          </span>
        </div>
        <div className="d-flex">
          <span className="issuedby">Issued by</span>
          <span className="separator"> : </span>
          <span className="supportingtext">
            {data.issuedBy}
            {data.issuedOrgVerifiedStatus && (
              <img src={CheckIcon} className="checkicon" alt="blue tick" />
            )}
          </span>
        </div>
      </div>
      <AwardPreviewCard data={data} />
    </>
  );
};

export default AwardView;
