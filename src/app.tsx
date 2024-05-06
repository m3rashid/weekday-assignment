import { useSelector } from "react-redux";

import { RootState } from "./store";
import JobCard from "./components/jobCard";
import Filters from "./components/filters";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import Spinner from "./components/spinner";

function App() {
  const { targetRef } = useInfiniteScroll();
  const jobs = useSelector((state: RootState) => state.job);

  return (
    <div style={{ margin: 32 }}>
      <Filters />

      <br />

      <div style={{ display: "flex", gap: 60, flexWrap: "wrap", minHeight: 300 }}>
        {jobs.filteredJdList.map((job) => {
          return <JobCard key={job.jdUid} {...job} />;
        })}
      </div>

      <div ref={targetRef}></div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 100, marginBottom: 100 }}>
        {jobs.loading ? <Spinner /> : null}
      </div>
    </div>
  );
}

export default App;
