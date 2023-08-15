import { useLocation } from "react-router-dom";
import MyResume from "../components/Resume/MyResume";
import NoResumeAdded from "../components/Resume/NoResumeAdded";

const ViewResume = () => {
  const location = useLocation();
  const data = location.state;

  return <>{data.resumeURL ? <MyResume data={data} /> : <NoResumeAdded />}</>;
};

export default ViewResume;
