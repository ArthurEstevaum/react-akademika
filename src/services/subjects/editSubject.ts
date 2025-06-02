import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData";
import { apiBaseUrl } from "../service.config";

export default async function editSubject(subjectId: string, data: ISubjectCreationData, token: String) {
  console.log(data)
  return await fetch(`${apiBaseUrl}/subjects/${subjectId}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json"
    }
  })
}