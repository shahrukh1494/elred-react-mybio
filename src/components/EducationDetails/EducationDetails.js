import useDataFetch from "../../customHooks/useDataFetch";
import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import "./EducationDetails.scss";
import ShiledIcon from "../../assets/images/shield icon.svg";
import BlueTickIcon from "../../assets/images/blue tick icon.svg";

const API_ENDPOINT = "noSessionViewMyBioEducationDetails?userCode=";
const USER_CODE = "63aad78bb38aa1d755b49561";

const EducationDetails = () => {
  const [data, loading, error] = useDataFetch(API_ENDPOINT + USER_CODE, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="Education details" />;

  const { educationDetails, companyDetails } = data.result[0];
  const date = new Date();
  const currentYear = date.getFullYear().toString();

  return (
    <>
      <div className="educationheader">Education details</div>
      <div className="educationboxcontainer">
        {educationDetails.length !== 0 ? (
          educationDetails?.map((education) => (
            <div key={education._id} className="edcationdetailscontainer">
              <div className="edutitle">
                <div className="areaofstudy">{education.areaOfStudy}</div>
                {education.alumniVerifiedStatus && (
                  <img
                    src={ShiledIcon}
                    alt="shield icon"
                    className="shieldicon"
                  />
                )}
              </div>
              <div className="institution">
                <span className="institutename">
                  {education.institutionName}
                </span>
                {education.institutionKYCVerifiedStatus && (
                  <img
                    src={BlueTickIcon}
                    alt="blue tick icon"
                    className="bluetickicon"
                  />
                )}
                |<span className="city">{education.location.city}</span>
              </div>
              <div className="year">
                {education.startYear}-
                {education.endYear === currentYear
                  ? "Present"
                  : education.endYear}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-secondary py-4 noeducation">
            No education details added yet
          </div>
        )}
      </div>
    </>
  );
};

export default EducationDetails;
