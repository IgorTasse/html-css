/*
    quando clicar na seta para avançar temos que esconder todas as imagens e mostra a próxima imagem
        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
        pra poder saber que agora eu vou mostrar a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
        
            mostrar a próxima imagem
                pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/
const imagensPainel = document.querySelectorAll('.imagem-painel'); //Buscando todos os seletores de .imagem-painel
const setaAvancar = document.getElementById('btn-avancar'); //Buscando elemento pelo ID
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0;

function esconderImagens(){
// pegar todas as imagens usando o DOM e remover a classe mostrar
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')//Removendo a classe mostrar
    }); //forEach vai percorrer o vetor de imagens
}

function mostrarImagens(){
    // pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
    imagensPainel[imagemAtual].classList.add('mostrar');//Adicionando a classe mostrar em todas as imagens para exibir
    }
// quando clicar na seta para avançar temos que esconder todas as imagens e mostra a próxima imagem

setaAvancar.addEventListener('click',function(){
    //Testa se o contador da imagemAtual é igual ao total de imagens
    cosnt = totalDeImagens = imagensPainel.length -1
    if(imagemAtual === totalDeImagens){
        return;
    }
    // a imagem atual começa em 0 pq é a primeira imagem
    // assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    // pra poder saber que agora eu vou mostrar a segunda imagem
    imagemAtual++;
    esconderImagens();

    mostrarImagens();
}) //Adicionando evento de click

setaVoltar.addEventListener('click',function(){
    if(imagemAtual === 0){
        return;
    }
    imagemAtual--;

    esconderImagens();

    mostrarImagens();
}) //Adicionando evento de click