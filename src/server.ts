import express, { request, response } from "express";

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração Especifica
 */

// http://localhost:3333/users

app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
});

// 1 parametro => rota(Recurso da API)
// 2 parametro => request, response

app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({ message: "Dados Salvos" });
});

app.listen(3333, () => console.log("Sevidor online"));