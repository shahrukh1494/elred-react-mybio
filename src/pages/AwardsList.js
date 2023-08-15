import AwardsHeader from "../components/AwardsList/AwardsHeader";
import AwardsListView from "../components/AwardsList/AwardsListView";
import { useLocation } from "react-router-dom";

const AwardsList = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <AwardsHeader headerText="My Awards & certificates" />
      <AwardsListView data={data} />
    </>
  );
};

export default AwardsList;
