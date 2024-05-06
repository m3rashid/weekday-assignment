import { Action, Job } from "../../types";

export type GetJobsParams = { limit: number; offset: number };
export type GetJobsResponse = { jdList: Array<Job>; totalCount: number };
export const jobsNullResponse: GetJobsResponse = { jdList: [], totalCount: 0 };
export type JobFilters = Partial<Pick<Job, "minExp" | "companyName" | "location" | "jobRole" | "minJdSalary">> & {
  remote?: boolean;
};

export type JobLoadingAction = Action<"JOBS_LOADING">;
export type JobLoadedAction = Action<"JOBS_LOADED", GetJobsResponse>;
export type ChangeFiltersAction = Action<"MODIFY_FILTERS", JobFilters>;

export type JobAction = JobLoadingAction | JobLoadedAction | ChangeFiltersAction;

export type JobState = {
  limit: number;
  loading: boolean;
  jdList: Array<Job>;
  filters: JobFilters;
  currentoffset: number;
  filteredJdList: Array<Job>;
};

export const jobInitialState: JobState = {
  limit: 10,
  jdList: [],
  filters: {},
  loading: true,
  currentoffset: 0,
  filteredJdList: [],
};

export function filterJdList(jdList: Array<Job>, filters: JobFilters): Array<Job> {
  const jobs: Array<Job> = [];
  for (let i = 0; i < jdList.length; i++) {
    if (filters.companyName && jdList[i].companyName != filters.companyName) continue;
    if (filters.jobRole && jdList[i].jobRole != filters.jobRole) continue;
    if (filters.location && jdList[i].location != filters.location) continue;
    if (filters.minExp && (jdList[i].minExp || 100) < filters.minExp) continue;
    if (filters.minJdSalary && (jdList[i].minJdSalary || 0) < filters.minJdSalary) continue;
    if (filters.remote && jdList[i].location != "remote") continue;
    jobs.push(jdList[i]);
  }

  return jobs;
}
