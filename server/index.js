import express from "express"
import cors from 'cors'

import getUsuarioRoute from './route/usuario.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());


app.use('/usuario', getUsuarioRoute);


app.listen(5000);
