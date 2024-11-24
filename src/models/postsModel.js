import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getPosts(){
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(post) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.insertOne(post);
}

export async function atualizarPost(id, post) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    const object_ID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new  ObjectId(object_ID)}, {$set: post});
}