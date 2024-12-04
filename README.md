# API de Rede Social - Backend em Node.js

Este projeto é uma API backend desenvolvida a partir da Imersão de Backend da Alura, utilizando Node.js e Express.js, com integração ao MongoDB, para o gerenciamento de posts em uma plataforma no modelo de rede social. A API oferece funcionalidades para listagem, criação, atualização e envio de imagens associadas a posts.

## Funcionalidades

- **Listagem de posts**: Endpoint para retornar todos os posts existentes.
- **Criação de post**: Endpoint para criar um novo post na plataforma.
- **Atualização de post**: Endpoint para alterar um post existente.
- **Envio de imagem**: Endpoint para fazer o upload de imagens associadas a posts.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework minimalista para construção de APIs em Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os posts.
- **Multer**: Middleware para upload de arquivos (imagens).
- **CORS**: Controle de acesso a recursos de diferentes origens, permitindo a interação com o frontend.

## Instalação

Para rodar o projeto, siga os passos abaixo:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/gamanasc/imersao-back-end-alura.git
    ```

2. **Instale as dependências:**

    Navegue até o diretório do projeto e execute o comando:

    ```bash
    npm install
    ```

3. **Configure o banco de dados MongoDB:**

    Certifique-se de ter o MongoDB rodando na sua máquina ou utilize um serviço na nuvem (como o MongoDB Atlas). Configure a URL de conexão no arquivo de configuração ou no código do projeto.

4. **Inicie o servidor:**

    ```bash
    npm start
    ```

    O servidor estará disponível em `http://localhost:5000`.

## Endpoints

### `GET /posts`
Retorna uma lista de todos os posts na plataforma.

### `POST /posts`
Cria um novo post na plataforma. O corpo da requisição deve conter os dados do post.

### `POST /upload`
Faz o upload de uma imagem associada a um novo post. A imagem será enviada como parte do corpo da requisição utilizando ``multipart/form-data``.

### `POST /upload/:id`
Atualiza um post existente, incluindo a possibilidade de alterar a imagem associada.

## Dependências

- `express`: Framework para criar a API.
- `mongoose`: Biblioteca para interação com MongoDB.
- `multer`: Middleware para upload de arquivos.
- `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
