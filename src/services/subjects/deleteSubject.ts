import { apiBaseUrl } from "../service.config";

export default async function deleteSubject(subjectId: string) {
  return await fetch(`${apiBaseUrl}/subjects/${subjectId}`, {
    method: "DELETE"
  })
}