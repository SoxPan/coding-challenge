import { EmploymentType } from "../enums";

export interface IJob {
    id: number;
    title: string;
    description: string;
    employment_type: string;
    location: string;
}
