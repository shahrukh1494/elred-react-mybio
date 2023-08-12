import React from "react";

const SectionLoader = () => {
  return (
    <div className="d-flex justify-content-center py-5">
      <div className="spinner-border text-primary m-auto">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SectionLoader;
