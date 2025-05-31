import { useQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "../service.config";

export default async function getSubjects(token: String) {
  const response = await fetch(`${apiBaseUrl}/subjects`, { headers: { Authorization: `Bearer ${token}` } })

  if(!response.ok) {
    throw new Error("Erro ao buscar as disciplinas")
  }

  return response.json()
}

export const useSubjects = (token: String) => {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: () => getSubjects(token)
  })
}