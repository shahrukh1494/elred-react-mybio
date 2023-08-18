import { useContext } from "react";
import useDataFetch from "../../customHooks/useDataFetch";
import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import DetailsList from "../DetailsList/DetailsList";
import "./EducationDetails.scss";
import UserContext from "../UserContext";

const API_ENDPOINT = "noSessionViewMyBioEducationDetails?userCode=";

const EducationDetails = () => {
  const { userCode } = useContext(UserContext);
  const [data, loading, error] = useDataFetch(API_ENDPOINT + userCode, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="Education and company details" />;

  const { educationDetails, companyDetails } = data.result[0];

  return (
    <>
      <div className="educationheader">Education details</div>
      <div className="educationboxcontainer">
        <DetailsList details={educationDetails} />
      </div>

      <div className="companyheader">Company details</div>
      <div className="companyboxcontainer">
        <DetailsList details={companyDetails} />
      </div>
    </>
  );
};

export default EducationDetails;
