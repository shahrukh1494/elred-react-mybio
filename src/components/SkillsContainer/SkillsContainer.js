import "./SkillsContainer.scss";

const SkillsContainer = ({
  skillsHeader = "",
  subHeader,
  pillValues,
  notAddedText,
}) => {
  return (
    <>
      <div className="skillscontainer">
        {skillsHeader && <div className="skillsheader">{skillsHeader}</div>}
        <div className="skillstext">{subHeader}</div>
        {pillValues.length !== 0 ? (
          <div className="pillscontainer">
            {pillValues?.map((pillValue) => (
              <span className="pill" key={pillValue._id}>
                {pillValue.value}
              </span>
            ))}
          </div>
        ) : (
          <div className="text-center text-secondary pb-4">{notAddedText}</div>
        )}
      </div>
      {subHeader?.includes("subjects") ? (
        <div className="bordercontainerbottom"></div>
      ) : (
        <div className="borderelement"></div>
      )}
    </>
  );
};

export default SkillsContainer;
