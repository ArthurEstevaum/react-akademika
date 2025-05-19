import { apiBaseUrl } from '../service.config';
import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData";

export default async function createSubject(data: ISubjectCreationData) {
    return await fetch(`${apiBaseUrl}/subjects`, {
        method: "POST",
        body: JSON.stringify(data)
    })
}