import express from 'express'
import { listarPosts } from '../controllers/postsController.js';

const routes = (app) => {
    // Retorna JSON caso seja aplicável
    app.use(express.json());

    // Rota para retornar todos os posts
    app.get('/posts', listarPosts);

};

export default routes;
