import express from 'express'
import { listarPosts, publicarPost } from '../controllers/postsController.js';

const routes = (app) => {
    // Retorna JSON caso seja aplicável
    app.use(express.json());

    // Rota para retornar todos os posts
    app.get('/posts', listarPosts);
    // Rota para inserir um novo post
    app.post('/posts', publicarPost);

};

export default routes;
