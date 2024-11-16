import { db } from '../db.js';


export const criarConta = (req, res) => {
    const { nomeUsuario } = req.body;
    const { emailUsuario } = req.body;
    const { senhaUsuario } = req.body;
    const { nomeCompletoUsuario } = req.body;
    const { idadeUsuario } = req.body;
    const { favoritoUsuario } = req.body;
    const { fotoUsuario } = req.body;
    
    if (fotoUsuario != undefined) {
        const bufferImg = Buffer.from(fotoUsuario.split(',')[1], 'base64');
        fotoUsuario = bufferImg;
    }
    
    let sql = 'CALL sp_Usuario_Inserir(?, ?, ?, ?, ?, ?, ?)';

    db.query( sql, [ nomeUsuario, emailUsuario, senhaUsuario, nomeCompletoUsuario, idadeUsuario, favoritoUsuario, fotoUsuario ], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Erro ao criar conta." });
        }
        res.status(200).send(result);
    });
};

export const logarUsuario = (req, res) => {
    const { senhaUsuario } = req.body;
    const { nomeUsuario } = req.body;


    let sql = 'CALL sp_Usuario_Logar(?, ?)';

    db.query( sql, [ nomeUsuario, senhaUsuario ], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Erro ao logar." });
        }
        res.status(200).send(result);
    });
};
