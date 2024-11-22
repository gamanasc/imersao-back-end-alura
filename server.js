import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

const app = express();
// Retorna JSON caso seja aplicável
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

async function getPosts(){
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get('/posts', async (req, res) => {
    const posts = await getPosts();
    res.status(200).json(posts);
});

// app.get('/posts/:id', (req, res) => {
//     const index = buscarPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });

