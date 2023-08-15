import AwardView from "../components/AwardsList/AwardView";
import AwardsHeader from "../components/AwardsList/AwardsHeader";

const ViewAward = () => {
  return (
    <>
      <AwardsHeader headerText="My awards & certificates" searchIcon={false} />
      <AwardView />
    </>
  );
};

export default ViewAward;
