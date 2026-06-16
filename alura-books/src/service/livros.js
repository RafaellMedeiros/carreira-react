import axios from "axios";

const API_URL = "http://localhost:8000/livros";

const livroService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export async function getLivros() {
  const response = await livroService.get("/")
  return response.data;
}

