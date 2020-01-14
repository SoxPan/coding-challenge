import {
    fetchJobsPending,
    fetchJobsSucces,
    fetchJobsFailure
} from "../store/actions/jobsActions";

/**
 * @desc fetching jobs array
 * @return function which is dispatching success or failure action
 */
export const fetchJobs = () => {
    return (dispatch: any) => {
        dispatch(fetchJobsPending());
        fetch(`${process.env.PUBLIC_URL}/mock.json`)
            .then(res => res.json())
            .then(res => {
                dispatch(fetchJobsSucces(res));
            })
            .catch(error => {
                dispatch(fetchJobsFailure(error));
            });
    };
};
