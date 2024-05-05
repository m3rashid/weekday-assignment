import { JobAction, JobState, jobInitialState } from "./helpers";

const jobReducer = (state = jobInitialState, action: JobAction): JobState => {
  if (action.type === "JOBS_LOADING") return { ...state, loading: true };
  if (action.type === "JOBS_LOADED") {
    const allJobs = state.jdList;
    for (let i = 0; i < action.payload.jdList.length; i++) {
      if (allJobs.find((job) => job.jdUid === action.payload.jdList[i].jdUid)) continue;
      allJobs.push(action.payload.jdList[i]);
    }

    return {
      ...state,
      loading: false,
      currentoffset: state.currentoffset + 1,
      jdList: allJobs,
    };
  }
  return state;
};

export default jobReducer;
