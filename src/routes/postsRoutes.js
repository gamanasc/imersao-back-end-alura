import express from 'express'
import multer from 'multer';
import { listarPosts, publicarPost, uploadImagem } from '../controllers/postsController.js';

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

    // Rota para retornar todos os posts
    app.get('/posts', listarPosts);
    // Rota para inserir um novo post
    app.post('/posts', publicarPost);
    app.post('/upload', upload.single("imagem"), uploadImagem);

};

export default routes;
