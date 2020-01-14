import React, { FC } from "react";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";

import { IJob } from "../../types";

interface IProps {
    job: IJob;
}

const StyledListItem = styled.li`
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #e0e0e0;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #e0e0e0;
    }
`;

export const StyledListitemLink = styled(Link)`
    width: 100%;
    height: auto;
    display: block;
    padding-left: 15px;
    text-decoration: none;
    line-height: 39px;
    color: #000;
`;

export const ListItem: FC<IProps> = ({ job }) => {
    return (
        <StyledListItem>
            <StyledListitemLink to={`/${job.id}`}>
                {job.title}
            </StyledListitemLink>
        </StyledListItem>
    );
};
