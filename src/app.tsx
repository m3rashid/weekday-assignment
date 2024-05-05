import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./store";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { getJobs } from "./store/job/actions";
import JobCard from "./components/jobCard";
import Filters from "./components/filters";

function App() {
  // const { targetRef } = useInfiniteScroll();
  const jobs = useSelector((state: RootState) => state.job);
  const dispatch = useDispatch();

  // dummy
  useEffect(() => {
    dispatch(getJobs() as any);
  }, []);

  return (
    <div style={{ margin: 32 }}>
      <Filters />

      <br />

      <div style={{ display: "flex", gap: 60, flexWrap: "wrap", minHeight: 300 }}>
        {jobs.filteredJdList.map((job) => {
          return <JobCard key={job.jdUid} {...job} />;
        })}
      </div>

      {/* <div ref={targetRef}></div> */}

      {jobs.loading ? <h3>Loading...</h3> : null}
    </div>
  );
}

export default App;
