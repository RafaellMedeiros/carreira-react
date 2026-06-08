import axios from "axios";

const API_URL = "http://localhost:8080/livros";

class LivroService {
  constructor() {
    const livroService = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getLivros() {
    return livroService.get("/");
  }

  getLivroById(id) {
    return livroService.get(`/${id}`);
  }

  createLivro(livro) {
    return livroService.post("/", livro);
  }

  updateLivro(id, livro) {
    return livroService.put(`/${id}`, livro);
  }

  deleteLivro(id) {
    return livroService.delete(`/${id}`);
  }
}

export default new LivroService();
