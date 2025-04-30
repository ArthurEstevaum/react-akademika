import {subjectCreationRequest} from "../types/subjectCreation.ts";

export default async function createSubject(data: subjectCreationRequest) {
    return await fetch(`${process.env.API_BASE_URL}/disciplinas/criar`, {
        method: "POST",
        body: JSON.stringify(data)
    })
}