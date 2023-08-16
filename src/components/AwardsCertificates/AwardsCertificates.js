import { useContext } from "react";
import useDataFetch from "../../customHooks/useDataFetch";
import FetchError from "../FetchError";
import SectionLoader from "../SectionLoader";
import "./AwardsCertificates.scss";
import { useNavigate } from "react-router-dom";
import userContext from "../UserContext";
import AwardIcons from "./AwardIcons";

const API_ENDPOINT = "noSessionPreviewAwards?userCode=";

const AwardsCertificates = () => {
  const { userCode } = useContext(userContext);
  const navigate = useNavigate();
  const [data, loading, error] = useDataFetch(API_ENDPOINT + userCode, {
    method: "POST",
  });
  if (loading) return <SectionLoader />;
  if (error) return <FetchError header="My awards & certificates" />;

  let { result, totalAwardsCount } = data;
  const navigateToAwards = () => {
    result = result.slice(0, 10);

    navigate("/my-awards-and-certificates", {
      state: { result, totalAwardsCount },
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
        <AwardIcons result={result} />
      </div>
    </>
  );
};

export default AwardsCertificates;
