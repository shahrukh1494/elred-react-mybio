import AwardView from "../components/AwardView/AwardView";
import AwardsHeader from "../components/AwardsHeader/AwardsHeader";

const ViewAward = () => {
  return (
    <>
      <AwardsHeader headerText="My awards & certificates" searchIcon={false} />
      <AwardView />
    </>
  );
};

export default ViewAward;
