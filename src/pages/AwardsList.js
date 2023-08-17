import AwardsHeader from "../components/AwardsHeader/AwardsHeader";
import AwardsListView from "../components/AwardsList/AwardsList";
import { useLocation } from "react-router-dom";

const AwardsList = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <AwardsHeader headerText="My Awards & certificates" />
      <AwardsListView count={data} />
    </>
  );
};

export default AwardsList;
