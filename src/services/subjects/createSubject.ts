import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData";

export default async function createSubject(baseUrl: string, data: ISubjectCreationData) {
    const fetchOptions = {
        method: "POST",
        body: JSON.stringify(data)
    }

    const response = await fetch(`${baseUrl}/disciplinas/criar`, fetchOptions)

    return response
}