const burgurs = [
    {
        id: 1,
        nome: "Bisg smash",
        preco: 27.80,
        image: "./src/assets/burguers/1.png",
        descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus odit, cum numquam ullam sapiente ipsam in, quod dolorum, isquam. Officiis, voluptatum!"
    },
    {
        id: 2,
        nome: "Megazord",
        preco: 19.90,
        image: "./src/assets/burguers/2.png",
        descricao:"Lorem ipsum dolor sit ametin, quod dolorum, recusandae non. Impedit quidem perspiciatis autem maxime cumque quisquam. Officiis, voluptatum!"
    },
    {
        id: 3,
        nome: "Baby yoda",
        preco: 25.40,
        image: "./src/assets/burguers/3.png",
        descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus odit, cum numquam ullam sapiente ipsam involuptatum!"
    },
    {
        id: 4,
        nome: "Burguer Bacon shower",
        preco: 27.50,
        image: "./src/assets/burguers/4.png",
        descricao:"Lorem ipsum dolor sit tatum!"
    },
    {
        id: 5,
        nome: "Sarapateu",
        preco: 18.50,
        image: "./src/assets/burguers/5.png",
        descricao:"Lorem ipsum , recusandae non. Impedit quidem perspiciatis autem maxime cumque quisquam. Officiis, voluptatum!"
    },
    {
        id: 6,
        nome: "Shake do arabe",
        preco: 17.50,
        image: "./src/assets/burguers/6.png",
        descricao:"Lorem ipsum dolor sit . A necessitatibus odit, cum numquam ullam sapiente ipsam in, quod dolorum, recusandae non. Impedit quidem perspiciatis autem maxime cumque quisquam. Officiis, voluptatum!"
    },
    {
        id: 7,
        nome: "Duplo mortal carpado",
        preco: 16.99,
        image: "./src/assets/burguers/7.png",
        descricao:"Lorem ipsum dolor sit amet consectetur, voluptatum!"
    },
    {
        id: 8,
        nome: "Muitcho Loco",
        preco: 15,
        image: "./src/assets/burguers/8.png",
        descricao:"Lorem ipsumipsam in, quod dolorum, recusandae non. Impedit quidem perspiciatis autem maxime cumque quisquam. Officiis, voluptatum!"
    },
    {
        id: 9,
        nome: "Mexicano",
        preco: 32,
        image: "./src/assets/burguers/9.png",
        descricao:"Lorem ipsum dolor sit amet , quod dolorum, recusandae non. Impedit quidem perspiciatis autem maxime cumque quisquam. Officiis, voluptatum!"
    },
    {
        id: 10,
        nome: "Texano",
        preco: 25,
        image: "./src/assets/burguers/10.png",
        descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus odit, cum numquam ullam sapiente ipsam in"
    }
];

const carrinho = [];

const cardapio = document.querySelector('.cardapio');
const contentCarrinho = document.querySelector('.content-carrinho');

burgurs.forEach((lista) => {
    cardapio.innerHTML += `<div class="content-burguer">
                <img src=${lista.image} alt="" srcset="">
                <div class="content-burguer-info">
                    <h3 class="content-burguer-title">${lista.nome}</h3>
                    <p class="content-burguer-description">${lista.descricao}</p>
                    <span>
                        <strong class="content-burguer-price">R$ ${lista.preco.toFixed(2)}</strong>
                        
                        <button class="content-burguer-button" onClick="mostrarDetalhes(${lista.id})">Saiba mais</button>
                    </span>
                </div>
            </div>`;
});


function mostrarDetalhes(infor) {
    const detalhes = document.querySelector('.modal');
    detalhes.classList.toggle('display-none');
    let containerModal = document.querySelector('.container-modal');
    const burguer = burgurs.find(busca => busca.id === infor);

    if (!burguer) {
        return;
    }
    containerModal.innerHTML = `<div class="modal-content" onClick="mostrarDetalhes()">
                <img src="${burguer.image}" alt="" srcset="">
                <div class="modal-burguer">
                    <h1>${burguer.nome}</h1>
                    <p>${burguer.descricao}</p>
                    <textarea placeholder="Observação..."></textarea>
                    <button class="adicionar">Adicionar ao Carrinho</button>
                </div>
                <span class="close-modal" onClick="mostrarDetalhes()">x</span>
            </div>`;

            document.querySelector('.adicionar').addEventListener('click', () => {
                adicionarBurguer(burguer)
            });
}

function adicionarBurguer(burguer){
    
        carrinho.push(burguer);
        atualizarCarrinho();
    
}

function atualizarCarrinho() {
    let novoPedido = '';
    let somaValor = 0;
    carrinho.forEach((pedido) => {
        novoPedido += `
            <li>${pedido.nome}: <span> R$ ${pedido.preco.toFixed(2)}
            <span class="excluir" onClick="excluirBurguer(${pedido.id})">X</span></span> 
            </li>
        `;
        somaValor += pedido.preco;
    });
    contentCarrinho.innerHTML = novoPedido;
    document.querySelector('.valor').innerHTML = `
        <span>Quantidade: <strong> ${carrinho.length}</strong></span> 
        <span>Total:  <strong> R$ ${somaValor.toFixed(2)}</strong></span>`;
}

function excluirBurguer(infor) {
    const indexToDelete = carrinho.findIndex(busca => busca.id === infor);

    if (indexToDelete !== -1) {
        carrinho.splice(indexToDelete, 1);
        atualizarCarrinho();
    }
}
