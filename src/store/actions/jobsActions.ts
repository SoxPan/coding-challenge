import { IAction } from "../types";
import { IJob } from "../../types";

export const FETCH_JOBS_PENDING = "[JOBS] FETCH_PENDING";
export const FETCH_JOBS_SUCCESS = "[JOBS] FETCH_SUCCESS";
export const FETCH_JOBS_FAILURE = "[JOBS] FETCH_FAILURE";

export const fetchJobsPending = (): IAction => {
    return {
        type: FETCH_JOBS_PENDING
    };
};

export const fetchJobsSucces = (jobs: IJob[]): IAction<IJob[]> => {
    return {
        type: FETCH_JOBS_SUCCESS,
        payload: jobs
    };
};

export const fetchJobsFailure = (error: Error): IAction<Error> => {
    return {
        type: FETCH_JOBS_FAILURE,
        payload: error
    };
};

export type JobsActions = IAction<IJob[] | Error | undefined>;
