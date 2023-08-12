import "./FetchError.scss";

const FetchError = ({ header = "" }) => {
  return (
    <>
      {header && <div className="aboutmeheader fetcherrorheader">{header}</div>}
      <div className="text-danger text-center pb-5">Something went wrong!</div>
      <div className="fetcherrorborderbottom"></div>
    </>
  );
};

export default FetchError;
