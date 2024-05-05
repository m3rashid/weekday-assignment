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
    <div>
      <h1>Jobs</h1>
      <Filters />

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", height: "60vh" }}>
        {jobs.jdList.map((job) => {
          return (
            // <div data-key={job.jdUid} key={job.jdUid} style={{ backgroundColor: "lightgray", padding: 10, width: 150, height: 150 }}>
            <JobCard key={job.jdUid} {...job} />
          );
        })}
      </div>

      {/* <div ref={targetRef}></div> */}

      {jobs.loading ? <h3>Loading...</h3> : null}
    </div>
  );
}

export default App;
