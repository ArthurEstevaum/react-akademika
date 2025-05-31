import { apiBaseUrl } from "../service.config";

export default async function deleteSubject(subjectId: string, token: string) {
  return await fetch(`${apiBaseUrl}/subjects/${subjectId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}
