# Loja Virtual - FullStack 🚀

Este repositório contém o **backend** e **frontend** completos de uma loja virtual, desenvolvidos como desafio final do **Rocket Program - Alpar**.

O sistema é composto por:
- **Backend**: API segura para autenticação, cadastro de produtos e gerenciamento de carrinho.
- **Frontend**: Interface web usando AngularJS para consumir a API.
- **Banco de dados**: SQLite gerenciado via Prisma ORM.

---

## 🚀 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Prisma ORM
- SQLite
- JSON Web Tokens (JWT)
- Bcrypt
- Cors
- Nodemon

### Frontend
- HTML5
- CSS3 (Flexbox, Grid, animações)
- AngularJS 1.8.3
- FontAwesome (ícones)
- Regex (validações)

---

## 📦 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Backend: Instalar dependências

```bash
cd Back-Loja-Virtual
npm install
```

### 3. Configurar variáveis de ambiente

Crie o arquivo `.env` na raiz do **Back-Loja-Virtual** com:

```
DATABASE_URL="file:./dev.db"
ACCESS_KEY="sua_chave_jwt_secreta_aqui"
```

> **IMPORTANTE:** Gere uma chave JWT forte para o `ACCESS_KEY`:
>
> ```bash
> node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
> ```

### 4. Configurar e rodar o banco de dados Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Para visualizar o banco:

```bash
npx prisma studio
```

### 5. Rodar o servidor de desenvolvimento (Backend)

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

### 6. Frontend: Abrir o projeto

**Caminho:** `Front-Loja-Virtual`

- Basta abrir o arquivo `index.html` em localhost.
- Use uma extensão como **Live Server** (VSCode) ou outro servidor local para rodar.

---

## 🛠️ Funcionalidades do Sistema

### 🧩 Backend

- Cadastro e login de usuários (`/auth/register`, `/auth/login`).
- Proteção de rotas com autenticação JWT.
- Cadastro e listagem de produtos (`/products`).
- Gerenciamento de carrinho de compras por usuário (`/cart`).
- Controle de permissões: usuários normais vs admin.
- Tratamento global de erros e rejeições de promises.

### 🧩 Frontend

- Página inicial com listagem de produtos.
- Botão "Adicionar ao Carrinho" protegido para usuários logados.
- Login dinâmico (sem F5).
- Cadastro de novos usuários.
- Tela de gerenciamento de carrinho.
- Tela de cadastro de produto (apenas para admin).
- Botões de login/logout que mudam dinamicamente.
- Responsividade mobile.

---

## 📬 Como Testar via Postman

1. Importe o arquivo `LojaVirtual.postman_collection.json` no Postman.
2. Use o endpoint `/auth/login` para obter um token.
3. Configure o token JWT no header Authorization das rotas protegidas (`Bearer seu_token_aqui`).
4. Teste todas as funcionalidades protegidas.

---

## 📂 Estrutura do Projeto

```
front-back/
├── Back-Loja-Virtual/
│   ├── src/
│   ├── prisma/
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── Front-Loja-Virtual/
│   ├── assets/
│   ├── views/
│   ├── js/
│   └── index.html
│
├── LojaVirtual.postman_collection.json
└── README.md
```

---

## 👨‍💻 Desenvolvido por

João Victor  

Projeto final do **Rocket Program - Alpar**.