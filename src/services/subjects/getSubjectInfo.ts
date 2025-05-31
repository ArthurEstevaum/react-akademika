import { useQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "../service.config";
import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData";

interface ISubjectInfo extends ISubjectCreationData {
    
}

export default async function getSubjectInfo(id: string, token: String) : Promise<ISubjectCreationData> {
    const response =  await fetch(`${apiBaseUrl}/subjects/${id}`, { headers: { Authorization: `Bearer ${token}` } })

    if (!response.ok) {
        throw new Error("Erro ao buscar a disciplina");
    }

    return response.json()
}

export const useSubject = (id: string, token: String) => {
    return useQuery({
        queryKey: ["subject", id],
        queryFn: () => getSubjectInfo(id, token),
    });
};