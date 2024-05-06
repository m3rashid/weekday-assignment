import { JobAction, JobState, filterJdList, jobInitialState } from "./helpers";

const jobReducer = (state = jobInitialState, action: JobAction): JobState => {
  if (action.type === "JOBS_LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "MODIFY_FILTERS") {
    const filters = { ...(state.filters || {}), ...action.payload };

    return {
      ...state,
      filters,
      filteredJdList: filterJdList(state.jdList, filters),
    };
  }

  if (action.type === "JOBS_LOADED") {
    const allJobs = state.jdList;
    // To make sure the jdList has unique (and not repeated) jobs
    for (let i = 0; i < action.payload.jdList.length; i++) {
      if (allJobs.find((job) => job.jdUid === action.payload.jdList[i].jdUid)) continue;
      allJobs.push(action.payload.jdList[i]);
    }

    return {
      ...state,
      loading: false,
      jdList: allJobs,
      currentoffset: state.currentoffset + 1,
      filteredJdList: filterJdList(allJobs, state.filters),
    };
  }
  return state;
};

export default jobReducer;
