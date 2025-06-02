import { apiBaseUrl } from '../service.config';
import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData";

export default async function createSubject(data: ISubjectCreationData, token: String) {
    return await fetch(`${apiBaseUrl}/subjects/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        }
    })
}