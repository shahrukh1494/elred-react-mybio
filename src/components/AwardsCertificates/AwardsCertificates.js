import useDataFetch from "../../customHooks/useDataFetch";
import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import "./AwardsCertificates.scss";
import { useNavigate } from "react-router-dom";

const API_ENDPOINT = "noSessionPreviewAwards?userCode=";
const USER_CODE = "63aad78bb38aa1d755b49561";
// const USER_CODE = "64525c7c907fa601fa957648";

const AwardsCertificates = () => {
  const navigate = useNavigate();

  const [data, loading, error] = useDataFetch(API_ENDPOINT + USER_CODE, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="My awards & certificates" />;

  const { result } = data;

  const navigateToAwards = () => {
    navigate("/my-awards-and-certificates", {
      state: result,
    });
  };

  return (
    <>
      <div className="awardscontainer">
        <div className="d-flex justify-content-between awardsheader">
          <div className="awardscertificatestxt">My awards & certificates</div>
          {result.length !== 0 && result !== "Awards not found!" && (
            <div onClick={navigateToAwards} className="viewalltext">
              View all
            </div>
          )}
        </div>
        <div
          className={`${
            result?.length !== 0
              ? "awardiconscontainer"
              : "text-center text-secondary pt-2 pb-5"
          }`}
        >
          {result?.length === 0 || result === "Awards not found!"
            ? "No awards or certificates yet"
            : result?.map((award) => (
                <img
                  key={award.awardId + Math.random()}
                  src={award.awardIconURL}
                  className="awardicon"
                  alt="award icon"
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default AwardsCertificates;
