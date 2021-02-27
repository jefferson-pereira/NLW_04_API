import 'reflect-metadata';
import express, { request, response } from "express";
import "./database";
import { router } from './routes';

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração Especifica
 */

// http://localhost:3333/users

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Sevidor online"));