import useDataFetch from "../../customHooks/useDataFetch";
import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import "./AwardsCertificates.scss";

const API_ENDPOINT = "noSessionPreviewAwards?userCode=";
const USER_CODE = "63aad78bb38aa1d755b49561";

const AwardsCertificates = () => {
  const [data, loading, error] = useDataFetch(API_ENDPOINT + USER_CODE, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="My awards & certificates" />;

  const { result } = data;

  return (
    <>
      <div className="awardscontainer">
        <div className="d-flex justify-content-between awardsheader">
          <div className="awardscertificatestxt">My awards & certificates</div>
          {result.length !== 0 && <div className="viewalltext">View all</div>}
        </div>
        <div
          className={`${
            result.length !== 0
              ? "awardiconscontainer"
              : "text-center text-secondary pt-2 pb-5"
          }`}
        >
          {result.length !== 0
            ? result?.map((award) => (
                <img
                  key={award.awardId}
                  src={award.awardIconURL}
                  className="awardicon"
                  alt="award icon"
                />
              ))
            : "No awards or certificates yet"}
        </div>
      </div>
    </>
  );
};

export default AwardsCertificates;
