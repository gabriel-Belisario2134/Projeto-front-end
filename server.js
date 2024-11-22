import express from 'express';
import cors from 'cors';  
import bcrypt from 'bcryptjs'; // biblioteca para criptografia
import { PrismaClient } from '@prisma/client'; 

const app = express();
const prisma = new PrismaClient();

// cors para que o front-end possa fazer requisições para o back-end
app.use(cors());

app.use(express.json()); // framework pra criar servidores HTTP

// endpoint para cadastro 
app.post("/api/cadastro", async (req, res) => {
  const { email, senha } = req.body;

  // verificar se o usuário já existe
  const usuarioExistente = await prisma.usuario.findUnique({
    where: { email },
  });

  if (usuarioExistente) {
    return res.status(400).json({ message: "Usuário já existe!" });
  }

  // criptografar a senha
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  // cria o usuário no banco de dados
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

// endpoint para login de usuário
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;

  // procurar o usuário no banco de dados
  const usuario = await prisma.usuario.findUnique({
    where: { email },
  });

  if (!usuario) {
    return res.status(400).json({ message: "Usuário não encontrado!" });
  }

  // comparar a senha do login com a senha criptografada
  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return res.status(400).json({ message: "Senha incorreta!" });
  }

  res.status(200).json({ message: "Login bem-sucedido!" });
});

// roda o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
