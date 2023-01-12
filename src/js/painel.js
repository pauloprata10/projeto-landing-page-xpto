const imagensPainel = document.querySelectorAll('.imagem-painel');

const setaAvancar = document.getElementById('btn-avancar');

const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0


function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}

// 1 - quando clicar na seta para avançar temos que esconder todas as imagens
// e mostrar a próxima imagem.

setaAvancar.addEventListener('click', function () {

// 2 - testa se o contador da imagemAtual é igual ao total de imagens


    const totalDeImagens = imagensPainel.length - 1
    if(imagemAtual === totalDeImagens) {
        return
    }

// 3 - a imagem atual começa em 0, porque é a primeira imagem
// assim que for clicado no avançar, preciso adicionar mais 1 ao contador 
// de imagens para poder saber que agora vou mostrar a segunda imagem.

    imagemAtual++;

// 4 - esconder todas as imagens, pegar todas as imagens usando o DOM e 
// remover a classe mostrar.

    esconderImagens()

// 5 - mostrar a proxima imagem, pegar todas as imagens, descobrir qual é a proxima,
// e colocar a classe mostrar nela.

    mostrarImagem()

})

// 6 - quando clicar na seta para voltar temos que esconder todas as imagens
// e mostrar a imagem anterior.

setaVoltar.addEventListener('click', function () {
    
    if(imagemAtual === 0) {
        return
    }

    imagemAtual --;
    
// 7 - esconder todas as imagens, pegar todas as imagens usando o DOM e 
// remover a classe mostrar.

    esconderImagens()

// 8 - mostrar a imagem anterior, pegar todas as imagens, descobrir qual é a proxima,
// e colocar a classe mostrar nela.

    mostrarImagem()
})