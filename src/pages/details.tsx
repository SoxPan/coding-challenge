import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { getJobState } from "../store/selectors/jobSelector";

import { fetchJob } from "../utils/fetchJob";

const StyledDetails = styled.section`
    width: 100%;
    height: auto;
`;

const StyledDetailsTitle = styled.h3`
    color: #607d8b;
    font-size: 18px;
    margin-bottom: 5px;
`;

const StyledDetailsLocation = styled.span`
    color: #9e9e9e;
    font-size: 13px;
`;

const StyledDetailsDescription = styled.p`
    margin-top: 15px;
    font-size: 14px;
    width: 600px;
    padding: 15px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #2f2f2f;
`;

const Details: FC = () => {
    let { id } = useParams();

    const { pending, job, error } = useSelector((state: any) =>
        getJobState(state)
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJob(Number(id)));
    }, [dispatch, id]);

    if (pending) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <StyledDetails>
            <Helmet>
                <title>{job.title}</title>
            </Helmet>

            <StyledDetailsTitle>
                {job.title} ({job.employment_type})
            </StyledDetailsTitle>
            <StyledDetailsLocation>{job.location}</StyledDetailsLocation>
            <StyledDetailsDescription>
                {job.description}
            </StyledDetailsDescription>
        </StyledDetails>
    );
};

export default Details;
