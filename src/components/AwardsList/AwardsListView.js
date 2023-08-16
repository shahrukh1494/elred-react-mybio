import "./AwardsList.scss";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../UserContext";
import SectionLoader from "../SectionLoader";
import FetchError from "../FetchError";
import AwardListItem from "./AwardListItem";
import { fetchData } from "../Functions/FetchData";

const AwardsListView = ({ count }) => {
  const [start, setStart] = useState(0);
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const observerTarget = useRef(null);
  const { userCode } = useContext(UserContext);
  const offset = 10;

  useEffect(() => {
    if (count > listData.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchData(
              setIsLoading,
              userCode,
              start,
              offset,
              setListData,
              setStart,
              setError
            );
          }
        },
        { threshold: 1 }
      );

      if (observerTarget.current) {
        observer.observe(observerTarget.current);
      }

      return () => {
        if (observerTarget.current) {
          observer.unobserve(observerTarget.current); //eslint-disable-line
        }
      };
    }
  }, [observerTarget, count, listData]); //eslint-disable-line

  return (
    <div className="listcontainer">
      {listData?.map((listItem) => (
        <AwardListItem
          key={listItem.awardId + Math.random()}
          listItem={listItem}
        />
      ))}
      <div ref={observerTarget}></div>
      {isLoading && <SectionLoader />}
      {error && <FetchError />}
    </div>
  );
};

export default AwardsListView;
