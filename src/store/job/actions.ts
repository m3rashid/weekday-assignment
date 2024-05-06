import { RootState } from "..";
import { baseUrl, getJobsRoute } from "../api";
import { Dispatch, GetState } from "../../types";
import { JobAction, jobsNullResponse } from "./helpers";

export function getJobs() {
  return async function (dispatch: Dispatch<JobAction>, getState: GetState<RootState>) {
    try {
      dispatch({ type: "JOBS_LOADING" });

      const state = getState();
      const res = await fetch(baseUrl + getJobsRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit: state.job.limit, offset: state.job.currentoffset }),
      });
      const data = await res.json();
      dispatch({ type: "JOBS_LOADED", payload: data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "JOBS_LOADED", payload: jobsNullResponse });
    }
  };
}
