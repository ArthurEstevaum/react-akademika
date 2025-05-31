import { apiBaseUrl } from "../service.config";

export default async function getPromptResponse(prompt: string, token: string) {
  const response = await fetch(`${apiBaseUrl}/prompt/process`, {
    method: "POST",
    body: JSON.stringify({ prompt, }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })

  if(!response.ok) {
    throw new Error("Erro ao processar prompt, tente novamente.")
  }

  return response.json()
}