import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchJobs } from "../utils/fetchJobs";
import { getJobsState } from "../store/selectors/jobsSelectors";

import { List } from "../components";

const Home: FC = () => {
    const dispatch = useDispatch();

    const { pending, jobs, error } = useSelector(getJobsState);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    if (error) {
        return <div>Something went wrong</div>;
    }

    if (pending || !jobs.length) {
        return <div>Loading</div>;
    }

    return (
        <>
            <Helmet>
                <title>Jobs List</title>
            </Helmet>
            <List jobs={jobs} />
        </>
    );
};

export default Home;
