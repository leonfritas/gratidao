import express  from "express";

import { criarConta, logarUsuario } from '../controllers/usuario.js' 

const getUsuarioRoute = express.Router();

getUsuarioRoute.post('/criarconta', criarConta);
getUsuarioRoute.post('/logarusuario', logarUsuario);

export default getUsuarioRoute

