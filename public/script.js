//Cria a pasta public e dentro dela coloca o index.html, style.css e script.js
console.log('script.js carregado!')

document.querySelector('#carregaBtn').addEventListener('click', ()=>{

    if(document.querySelector('#dinoName') !== null){

        document.querySelector('#dinoName').remove();
    }
    
    if(document.querySelector('#dinoImage') !== null){

        document.querySelector('#dinoImage').remove();
    }
    getDinoName();
    getDinoImage(); 
})

//aqui precisamos que o script pegue a informação do nome e da imagem que será carregada no index.js(servidor) 
async function getDinoName(){
    const response = await fetch('/dinoname'); //resposta do servidor
    const dados = await response.json();
    let dinoName = dados[0].join(' ');//tira do array
    console.log(dinoName);

   

    let dinoNameDiv = document.createElement('div');
    dinoNameDiv.id = 'dinoName'
    dinoNameDiv.textContent = dinoName;//mostra na pagina
    document.querySelector('#embrulhoDino').appendChild(dinoNameDiv) //gera o campo com o nome na pagina
}

async function getDinoImage(){
    const response = await fetch('/dinoimage'); //resposta do servidor
    const dados = await response.json();
    let dinoImage = dados.value[Math.floor(Math.random() * dados.value.length)];
    let dinoImageUrl = dinoImage.thumbnailUrl
    let dinoAlt = dinoImage.name;
    console.log(dinoImageUrl, dinoAlt);

    

    let img = document.createElement('img');
    img.id = 'dinoImage'
    img.src = dinoImageUrl; 
    img.alt = dinoAlt;
    document.querySelector('#embrulhoDino').appendChild(img)
}