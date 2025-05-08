
# Loja Virtual - Backend API

Este repositório contém o backend de uma loja virtual, desenvolvido como parte do desafio FullStack do Rocket Program.

O backend é responsável por:
- Cadastro e autenticação de usuários (login JWT)
- Cadastro e listagem de produtos
- Gerenciamento de carrinho de compras
- Banco de dados gerenciado via Prisma ORM + SQLite

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite
- JSON Web Tokens (JWT)
- Bcrypt
- Cors
- Nodemon

---

## 📦 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```
DATABASE_URL="file:./dev.db"
ACCESS_KEY="sua_chave_jwt_secreta_aqui"
```

> **IMPORTANTE:** a `ACCESS_KEY` deve ser uma senha forte, usada para assinar os tokens JWT.

### 📜 Como gerar uma chave forte:

Abra o terminal na pasta do seu projeto e rode:

```
 node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

### 4. Configurar e rodar o banco de dados Prisma

Gerar o banco de dados e o Prisma Client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Se quiser visualizar o banco:

```bash
npx prisma studio
```

(Abre o banco no navegador.)

---

### 5. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

## 🛠️ Endpoints Disponíveis

### Auth

- `POST /auth/login` — Faz login e retorna um token JWT.

### Products

- `GET /products` — Lista todos os produtos.
- `POST /products` — Cadastra novo produto (necessário token JWT).

### Cart

- `GET /cart` — Lista itens do carrinho (necessário token JWT).
- `POST /cart` — Adiciona item no carrinho (necessário token JWT).

---

## 📫 Como Testar via Postman

O projeto já possui uma **coleção Postman** pronta para facilitar o teste dos endpoints.

1. Importe o arquivo `LojaVirtual.postman_collection.json` no Postman.
2. Configure o token JWT no header Authorization das rotas protegidas.
3. Teste login, cadastro de produtos e gerenciamento do carrinho.

---

## 👨‍💻 Desenvolvido por

João Victor

🚀 Projeto desenvolvido no **Rocket Program - Alpar**

---
