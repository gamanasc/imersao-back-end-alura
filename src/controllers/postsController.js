import fs from 'fs';
import { getPosts, criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getPosts();
    res.status(200).json(posts);
}

export async function publicarPost(req, res){
    const post = req.body;

    try {
        const postCriado = await criarPost(post);
        res.status(200).json(postCriado);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição"
        });
    }
}

export async function uploadImagem(req, res){
    const post = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(post);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpg`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição"
        });
    }

}