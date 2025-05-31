import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData";
import { apiBaseUrl } from "../service.config";

export default async function editSubject(subjectId: string, data: ISubjectCreationData, token: String) {
  return await fetch(`${apiBaseUrl}/subjects/${subjectId}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}