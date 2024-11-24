import express from 'express'
import multer from 'multer';
import cors from 'cors'

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200 
}

import { listarPosts, publicarPost, uploadImagem, alterarPost } from '../controllers/postsController.js';

// Configuração específica do Windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    // Retorna JSON caso seja aplicável
    app.use(express.json());
    // Habilitando requisições de fontes externas configuradas
    app.use(cors(corsOptions));

    // Rota para retornar todos os posts
    app.get('/posts', listarPosts);
    // Rota para inserir um novo post
    app.post('/posts', publicarPost);
    // Rota para um novo post com upload de imagem
    app.post('/upload', upload.single("imagem"), uploadImagem);
    // Rota pra atualizar um post
    app.put('/upload/:id', alterarPost);

};

export default routes;
