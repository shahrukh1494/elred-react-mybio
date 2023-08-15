import "./Resume.scss";
import PdfIcon from "../../assets/images/pdficon.svg";
import ImageIcon from "../../assets/images/image icon.svg";
import CrossIcon from "../../assets/images/xmark.svg";
import { useNavigate } from "react-router-dom";

const MyResume = ({ data }) => {
  const navigate = useNavigate();
  const extension = "." + data.resumeURL.split(".").pop();

  const driveUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=${data.resumeURL}#tollbar=0&scrollbar=0`;

  return (
    <>
      <div className="resumeheader justify-content-between">
        <div className="d-flex">
          <img
            src={data.resumeContentType === "image" ? ImageIcon : PdfIcon}
            className="resumeicon"
            alt="resume icon"
          />
          <div className="myresumeheadertext">My Resume{extension}</div>
        </div>
        <div className="xiconcontainer">
          <img
            onClick={() => navigate("/")}
            src={CrossIcon}
            className="xicon"
            alt="cross icon"
          />
        </div>
      </div>
      <div className="resume">
        {data.resumeContentType === "image" ? (
          <img src={data.resumeURL} className="imgresume" alt="resume" />
        ) : (
          <iframe
            src={driveUrl}
            className="imgresume pdfresume"
            title="Resume Iframe"
          ></iframe>
        )}
      </div>
    </>
  );
};

export default MyResume;
