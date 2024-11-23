import fs from 'fs';
import { getPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import gerarDescricaoComGemini from '../services/geminiService.js'

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
        // Criando um novo nome para a imagem, baseada no ID retornado
        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpg`;

        // Usando a biblioteca nativa 'fs' para renomear a imagem salva para a variável acima
        fs.renameSync(req.file.path, imagemAtualizada);

        res.status(200).json(postCriado);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição"
        });
    }

}

export async function alterarPost(req, res){
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.jpg`;
    
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.jpg`);
        const descricao = await gerarDescricaoComGemini(imageBuffer);
        const post = {
            descricao: descricao,
            imgUrl: urlImagem,
            alt: req.body.alt
        }
        const postAtualizado = await atualizarPost(id, post);
        res.status(200).json(postAtualizado);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição"
        });
    }
}
