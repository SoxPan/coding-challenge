import {
    FETCH_JOB_PENDING,
    FETCH_JOB_SUCCESS,
    FETCH_JOB_FAILURE,
    JobActions
} from "../actions/jobActions";

import { IJobState } from "../types";
import { IJob } from "../../types";

const initialState: IJobState = {
    pending: false,
    job: {} as IJob,
    error: null
};

export const jobReducer = (state = initialState, action: JobActions) => {
    switch (action.type) {
        case FETCH_JOB_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_JOB_SUCCESS:
            return {
                ...state,
                pending: false,
                job: action.payload
            };
        case FETCH_JOB_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        default:
            return state;
    }
};
