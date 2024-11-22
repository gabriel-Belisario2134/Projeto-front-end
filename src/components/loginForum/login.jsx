import React, { useState } from "react";
import "./login.css"; 

// Componente de login para armazenar os dados
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // impede o comportamento padrão do formulário

    try {
      const response = await fetch("http://localhost:3000/api/login", { //endpoint de login
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }), //corpo da requisiçao em json
      });

      const data = await response.json(); //resposta em json

      if (response.ok) { //verifica se o login foi bem sucedido
        setMensagem(data.message); // mensagem de sucesso
        onLogin("token_exemplo"); //  token simulado
      } else {
        setMensagem(data.message); // mensagem de erro
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}

      <p>
        Ainda não tem uma conta? <a href="/cadastro">Faça seu cadastro</a>
      </p>
    </div>
  );
};

export default Login;
