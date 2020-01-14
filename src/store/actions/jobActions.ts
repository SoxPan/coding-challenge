import { IAction } from "../types";
import { IJob } from "../../types";

export const FETCH_JOB_PENDING = "[JOB] FETCH_PENDING";
export const FETCH_JOB_SUCCESS = "[JOB] FETCH_SUCCESS";
export const FETCH_JOB_FAILURE = "[JOB] FETCH_FAILURE";

export const fetchJobPending = (): IAction => {
    return {
        type: FETCH_JOB_PENDING
    };
};

export const fetchJobSucces = (job: IJob): IAction<IJob> => {
    return {
        type: FETCH_JOB_SUCCESS,
        payload: job
    };
};

export const fetchJobFailure = (error: Error): IAction<Error> => {
    return {
        type: FETCH_JOB_FAILURE,
        payload: error
    };
};

export type JobActions = IAction<IJob | Error | undefined>;
