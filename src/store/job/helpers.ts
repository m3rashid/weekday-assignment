import { Action, Job } from "../../types";

export type GetJobsParams = { limit: number; offset: number };
export type GetJobsResponse = { jdList: Array<Job>; totalCount: number };
export const jobsNullResponse: GetJobsResponse = { jdList: [], totalCount: 0 };
export type JobFilters = Partial<Pick<Job, "minExp" | "companyName" | "location" | "jobRole">> & {
  remote?: boolean;
  minBasePay?: {
    minJdSalary: number;
    salaryCurrencyCode: string;
  };
};

type JobLoadingAction = Action<"JOBS_LOADING">;
type JobLoadedAction = Action<"JOBS_LOADED", GetJobsResponse>;

export type JobAction = JobLoadingAction | JobLoadedAction;

export type JobState = {
  loading: boolean;
  jdList: Array<Job>;
  limit: number;
  currentoffset: number;
};

export const jobInitialState: JobState = {
  loading: true,
  jdList: [],
  limit: 20,
  currentoffset: 0,
};
