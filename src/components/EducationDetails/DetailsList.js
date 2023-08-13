import DetailItem from "./DetailItem";

const DetailsList = ({ details, currentYear }) => {
  return (
    <>
      {details.length !== 0 ? (
        details?.map((detail) => (
          <DetailItem
            key={detail._id}
            detail={detail}
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
