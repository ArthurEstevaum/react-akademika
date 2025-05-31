import { apiBaseUrl } from "../service.config"

export default async function getSummaryResponse(topic: string, size: string, token: string) {
  const queryParams = new URLSearchParams({ topic, size })

  const response = await fetch(`${apiBaseUrl}/summary/generate?${queryParams.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if(!response.ok) {
    throw new Error("Erro ao gerar resumo, tente novamente.")
  }

  return response.json()
}