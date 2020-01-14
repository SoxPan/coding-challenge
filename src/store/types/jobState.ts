import { IJob } from "../../types";

export interface IJobState {
    pending: boolean;
    job: IJob;
    error: Error | null;
}
