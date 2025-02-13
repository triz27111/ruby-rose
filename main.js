'use strict'

const categorias = [
    { nome: 'Skincare', icon: 'skincare.png', cor: 'pink' },
    { nome: 'Pinceis', icon: 'pinceis.png', cor: 'pink' },
    { nome: 'Olhos', icon: 'sombra.png', cor: 'pink' },
    { nome: 'Labios', icon: 'batom.png', cor: 'pink' }
]


function criarMenu(categoria) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')

    novaImagem.style.className = "card img"

    const novoSpan = document.createElement('Span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome
    

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${categoria.cor}`

    lista.appendChild(novoItem)

}

categorias.forEach(criarMenu)

const produtos = [
    {
        nome: "Gloss Labial",
        descricao: "O Gloss Labial da Ruby Rose proporciona brilho intenso e hidratação.",
        preco: "R$14,25",
        parcelas:"ou em até 6x de R$ 2,50 no cartão",
        imagem: "./img/img_1 (2).png"
    },
    {
        nome: "Bronzer Sunkiss",
        descricao: "O bronzer da Ruby Rose oferece um efeito bronzeado natural e fácil aplicação.",
        preco: "R$17,55",
        parcelas: "ou em até 6x de R$ 3,08 no cartão",
        imagem: "./img/img_1 (3).png"
    },
    {
        nome: "Contorno Smooth Contour",
        descricao: "O contorno da Ruby Rose realça os traços com acabamento natural e fácil aplicação.",
        preco: "R$14,56",
        parcelas: "ou em até 6x de R$ 2,56 no cartão",
        imagem: "./img/img_1 (4).png"
    },
    {
        nome: "Cream Cheeks",
        descricao: "Cream Cheeks é um blush cremoso que oferece um acabamento natural e duradouro, realçando todos os tons de pele.",
        preco: "R$15,30",
        parcelas: "ou em até 6x de R$ 2,56 no cartão",
        imagem: "./img/cream.png"
    }

];

function criarCards() {
    const container = document.querySelector('main'); // Seleciona o <main>

    produtos.forEach(produto => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

  
        wrapper.innerHTML = `
            <figure class="card">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <figcaption>
                    <h2>${produto.nome}</h2>
                    <div class="descricao">
                        <p>${produto.descricao}</p>
                    </div>
                      <h3>${produto.preco}</h3>
                      <p>${produto.parcelas}</p>
                </figcaption>
                <button class="compra">COMPRAR</button>
            </figure>
            `;

        container.appendChild(wrapper);
    });
}


criarCards()