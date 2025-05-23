import { useQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "../service.config";

export default async function getSubjects() {
  const response = await fetch(`${apiBaseUrl}/subjects`)

  if(!response.ok) {
    throw new Error("Erro ao buscar as disciplinas")
  }

  return response.json()
}

export const useSubjects = () => {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: () => getSubjects()
  })
}