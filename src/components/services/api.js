import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const criarUsuario = (email, senha) => 
    api.post("/usuarios", { email, senha });

export const loginUsuario = (email, senha) => 
    api.post("/login", { email, senha });

export default api;
