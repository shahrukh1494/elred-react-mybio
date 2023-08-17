import "./AwardsList.scss";
import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import SectionLoader from "../SectionLoader";
import FetchError from "../FetchError";
import AwardListItem from "../AwardListItem/AwardListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchData } from "../Functions/FetchData";

const AwardsListView = ({ count }) => {
  const [start, setStart] = useState(1);
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { userCode } = useContext(UserContext);
  const offset = 10;

  useEffect(() => {
    fetchData(
      setIsLoading,
      userCode,
      start,
      offset,
      setListData,
      setStart,
      setError
    );
  }, []); //eslint-disable-line

  const fetchMore = () => {
    fetchData(
      setIsLoading,
      userCode,
      start,
      offset,
      setListData,
      setStart,
      setError
    );
  };

  return (
    <>
      <InfiniteScroll
        dataLength={listData.length}
        next={fetchMore}
        height={"100vh"}
        className="infinitescroll"
        hasMore={count > listData.length}
        loader={<SectionLoader />}
      >
        <div className="listcontainer">
          {listData?.map((listItem) => (
            <AwardListItem
              key={listItem.awardId + Math.random()}
              listItem={listItem}
            />
          ))}
        </div>
      </InfiniteScroll>
      {listData.length !== 0 && <div className="borderbottom"></div>}
      {isLoading && <SectionLoader />}
      {error && <FetchError />}
    </>
  );
};

export default AwardsListView;
