//vai recarregar meu servidor toda vez que eu salvar um arquivo (referente a linha 07 do package.json)
//instalar o express
//instalar o nodemon
//instalar o dotenv 
if(process.env.NODE_ENV !== 'production'){

    require('dotenv').config(); //para esconder sua API Key
}
//chamar o express
// const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3090;
const fetch = require('node-fetch');
//referenciando a pasta onde estarão os arquivos estaticos (html e css)
app.use(express.static('public'));

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

const apiChave = process.env.API_KEY;

//criar a rota para carregar o nome do Dino
app.get('/dinoname', async (request, response) => {
    //roda as coisas da api
    const fetchApi = await fetch(
        'https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json',
        {
            method: "GET",
            headers: {
                'x-rapidapi-key': apiChave,
                'x-rapidapi-host': 'alexnormand-dino-ipsum.p.rapidapi.com'
            },
        });

    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
});

//criar a rota para carregar a imagem do Dino
app.get('/dinoimage', async (request, response) => {
    //roda as coisas da api
    const fetchApi = await fetch(
        'https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20',
        {
            'method': 'GET',
            'headers': {
                'x-rapidapi-key': apiChave,
                'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
            }
        });

    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse);
    response.json(dinoImageResponse);
});



