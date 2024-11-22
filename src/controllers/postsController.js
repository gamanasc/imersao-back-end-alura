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