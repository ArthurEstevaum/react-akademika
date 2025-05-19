import { Days } from "../types/days"
import { Deadline } from "../types/deadline";
import { Status } from "../types/status";

export interface ISubjectCreationData {
    name: string,
    status: Status,
    quarter: number,
    teacher?: string,
    syllabus?: string,
    days: Days[],
    deadlines: Deadline[]
}