import { exercise } from "../../types/exercise"
import { apiBaseUrl } from "../service.config"

export default async function getExerciseResponse(topic: string, difficulty: string, token: string) {
  const queryParams = new URLSearchParams({ topic, difficulty })
  const response = await fetch(`${apiBaseUrl}/exercise/generate?${queryParams.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  })

  if(!response.ok) {
    throw new Error("Erro ao gerar exercício, tente novamente.")
  }

  return await response.json()
}