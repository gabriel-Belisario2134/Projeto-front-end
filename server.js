import express from 'express';
import cors from 'cors'; // Importando o middleware CORS
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// Usando o CORS para permitir requisições de qualquer origem
app.use(cors());

// Para ler o corpo da requisição como JSON
app.use(express.json());

// Endpoint para cadastro de usuário
app.post("/api/cadastro", async (req, res) => {
  const { email, senha } = req.body;

  // Verificar se o usuário já existe
  const usuarioExistente = await prisma.usuario.findUnique({
    where: { email },
  });

  if (usuarioExistente) {
    return res.status(400).json({ message: "Usuário já existe!" });
  }

  // Criptografar a senha
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  // Criar o usuário no banco de dados
  try {
    const usuario = await prisma.usuario.create({
      data: {
        email,
        senha: senhaCriptografada,
      },
    });
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar o usuário." });
  }
});

// Endpoint para login de usuário
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;

  // Procurar o usuário no banco de dados
  const usuario = await prisma.usuario.findUnique({
    where: { email },
  });

  if (!usuario) {
    return res.status(400).json({ message: "Usuário não encontrado!" });
  }

  // Comparar a senha fornecida com a senha criptografada
  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return res.status(400).json({ message: "Senha incorreta!" });
  }

  // Caso o login seja bem-sucedido, retornar uma mensagem
  res.status(200).json({ message: "Login bem-sucedido!" });
});

// Rodando o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
