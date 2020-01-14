import { IJob } from "../../types";

export interface IJobsState {
    pending: boolean;
    jobs: IJob[];
    error: Error | null;
}
