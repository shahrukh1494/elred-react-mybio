import DetailItem from "../DetailItem/DetailItem";
import "./DetailsList.scss";

const DetailsList = ({ details, currentYear }) => {
  return (
    <>
      {details.length !== 0 ? (
        details?.map((detail) => (
          <DetailItem
            key={detail._id}
            detail={detail}
            name={detail.areaOfStudy || detail.companyName}
            verifiedStatus={
              detail.alumniVerifiedStatus || detail.employeeVerifiedStatus
            }
            orgName={detail.institutionName || detail.companyName}
            kycVerifiedStatus={
              detail.institutionKYCVerifiedStatus || detail.orgKYCVerifiedStatus
            }
            currentYear={currentYear}
          />
        ))
      ) : (
        <div className="text-center text-secondary py-4">
          No details added yet
        </div>
      )}
    </>
  );
};

export default DetailsList;
