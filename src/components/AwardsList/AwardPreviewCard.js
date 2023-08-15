import "./AwardsList.scss";
import PdfIcon from "../../assets/images/pdficon.svg";
import ImageIcon from "../../assets/images/image icon.svg";
import { useNavigate } from "react-router-dom";

const AwardPreviewCard = ({ data }) => {
  const navigate = useNavigate();

  let extension = "";
  let Icon;

  if (data.awardContentType === "pdf") {
    extension = ".pdf";
    Icon = PdfIcon;
  }

  if (data.awardContentType === "image") {
    extension = "." + data.awardCertificateURL.split(".").pop();
    Icon = ImageIcon;
  }

  const viewCertificate = () => {
    navigate("/view-certificate", { state: { data, extension } });
  };

  return (
    <>
      {data.awardContentType.trim() && data.awardContentType !== "none" ? (
        <div onClick={viewCertificate} className="previewcontainer">
          <img
            src={data.awardCertificateURL}
            className="awardiconthumbnail"
            alt="certificate"
          />
          <div className="d-flex certificatetitlecontainer">
            <img src={Icon} className="certificateicon" alt="icon" />
            <div className="mycertificate">My Certificate{extension}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AwardPreviewCard;
