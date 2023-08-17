import { useLocation } from "react-router-dom";
import MyResume from "../components/MyResume/MyResume";
import NoResumeAdded from "../components/NoResumeAdded/NoResumeAdded";

const ViewResume = () => {
  const location = useLocation();
  const data = location.state;

  return <>{data.resumeURL ? <MyResume data={data} /> : <NoResumeAdded />}</>;
};

export default ViewResume;
