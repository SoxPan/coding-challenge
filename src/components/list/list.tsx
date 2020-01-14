import React, { FC } from "react";
import styled from "styled-components";

import { ListItem } from "../listItem/listItem";

import { IJob } from "../../types";

const StyledList = styled.ul`
    width: 100%;
    height: auto;
    list-style: none;
    margin: 0;
    padding: 15px;
    background: #eeeeee;
`;

interface IProps {
    jobs: IJob[];
}

export const List: FC<IProps> = ({ jobs }) => {
    return (
        <StyledList>
            {jobs.map((job: IJob) => (
                <ListItem key={job.id} job={job} />
            ))}
        </StyledList>
    );
};
