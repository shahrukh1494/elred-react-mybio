import { useLocation, useNavigate } from "react-router-dom";
import "./Certificate.scss";
import PdfIcon from "../../assets/images/pdficon.svg";
import ImageIcon from "../../assets/images/image icon.svg";
import CrossIcon from "../../assets/images/xmark.svg";

const Certificate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, extension } = location.state;

  const driveUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=${
    data.pdfPreview || data.awardCertificateURL
  }#tollbar=0&scrollbar=0`;

  return (
    <>
      <div className="certificateheader d-flex justify-content-between">
        <div className="d-flex">
          <img
            src={data.awardContentType === "image" ? ImageIcon : PdfIcon}
            className="certificateicon"
            alt="certificate icon"
          />
          <div className="mycertificateheadertext">
            My Certificate{extension}
          </div>
        </div>
        <div className="xiconcontainer">
          <img
            onClick={() => navigate(-1)}
            src={CrossIcon}
            className="xicon"
            alt="cross icon"
          />
        </div>
      </div>
      <div className="certificate">
        {data.awardContentType === "image" ? (
          <img
            src={data.awardCertificateURL}
            className="imgcertificate"
            alt="certificate"
          />
        ) : (
          <iframe
            src={driveUrl}
            className="imgcertificate pdfcertificate"
            title="certificate Iframe"
          ></iframe>
        )}
      </div>
    </>
  );
};

export default Certificate;
