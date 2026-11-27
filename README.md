
# Projeto Esperança

## Projeto Integrador Extensionista II

Projeto desenvolvido para representar a estrutura inicial de uma ONG, utilizando Vite, JavaScript e API Express.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Vite
- Node.js
- Express

## Estrutura do projeto

- `server/index.js`: servidor da API.
- `src/main.js`: comunicação com a API.
- `src/style.css`: estilos da página.
- `index.html`: página inicial.
- `vite.config.ts`: configuração do proxy.
- `.env.example`: exemplo de variáveis de ambiente.

## Como executar o projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar a API

```bash
npm run api
```

### 3. Iniciar o Vite

Em outro terminal, execute:

```bash
npm run dev
```

### 4. Acessar o projeto

Abra no navegador:

http://localhost:5173

## API

Rota disponível:

`GET /api/health`

A resposta esperada é um JSON com o status `ok`.

## Autora

Adryane Oliveira Silva
