import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Foto teste',
        imagem: "https//placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: 'Foto teste 2',
        imagem: "https//placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: 'Foto teste 3',
        imagem: "https//placecats.com/millie/300/150"
    },
]

const app = express();
// Retorna JSON caso seja aplicável
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get('/posts', (req, res) => {
    res.status(200).json(posts)
});

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});

