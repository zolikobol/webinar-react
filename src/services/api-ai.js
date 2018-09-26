import { ApiAiClient } from 'api-ai-javascript';
let client = null;

export const initApiAi = (accessToken) => {
  client = new ApiAiClient({accessToken: accessToken});
}

export const sendMessage = (message) => {
  return client.textRequest(message)
}