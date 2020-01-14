import {
    fetchJobPending,
    fetchJobSucces,
    fetchJobFailure
} from "../store/actions/jobActions";
import { IJob } from "../types";

/**
 * @desc fetching job by id ( for mock data we are fetching whole data )
 * @param number id - id of job
 * @return function which is dispatching success or failure action
 */
export const fetchJob = (id: number) => {
    return (dispatch: any) => {
        dispatch(fetchJobPending());
        fetch(`${process.env.PUBLIC_URL}/mock.json`)
            .then(res => res.json())
            .then(res => {
                let jobState = res.filter((job: IJob) => {
                    return job.id === id;
                })[0];

                dispatch(fetchJobSucces(jobState));
            })
            .catch(error => {
                dispatch(fetchJobFailure(error));
            });
    };
};
