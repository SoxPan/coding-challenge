import {
    FETCH_JOBS_PENDING,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    JobsActions
} from "../actions/jobsActions";

import { IJobsState } from "../types";

const initialState: IJobsState = {
    pending: false,
    jobs: [],
    error: null
};

export const jobsReducer = (state = initialState, action: JobsActions) => {
    switch (action.type) {
        case FETCH_JOBS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                pending: false,
                jobs: action.payload
            };
        case FETCH_JOBS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        default:
            return state;
    }
};
