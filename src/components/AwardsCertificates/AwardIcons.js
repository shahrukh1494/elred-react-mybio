import "./AwardsCertificates.scss";

const AwardIcons = ({ result }) => {
  return (
    <div
      className={`${
        result?.length !== 0
          ? "awardiconscontainer"
          : "text-center text-secondary pt-2 pb-5"
      }`}
    >
      {result?.length === 0 || result === "Awards not found!" ? (
        <div className="text-center text-secondary mt-1">
          No awards or certificates added yet
        </div>
      ) : (
        result?.map((award) => (
          <img
            key={award.awardId + Math.random()}
            src={award.awardIconURL}
            className="awardicon"
            alt="award icon"
          />
        ))
      )}
    </div>
  );
};

export default AwardIcons;
