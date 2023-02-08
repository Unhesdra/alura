const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(elemento => {
    criarElemento(elemento);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    const existe = itens.find((elemento) => elemento.nome === nome.value);
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe) {
        itemAtual.id = existe.id;
        atualizarElemento(itemAtual);
        const elementoIndex = itens.findIndex((e) => e.id === existe.id);
        itens[elementoIndex] = itemAtual;
    } else {
        const tamanhoItens = itens.length;
        console.log(tamanhoItens > 0);
        itemAtual.id = tamanhoItens > 0 ? itens[tamanhoItens - 1].id + 1 : 0;
        criarElemento(itemAtual);
        itens.push(itemAtual);
    }
    
    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

function criarElemento(itemAtual) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");    
    numeroItem.innerHTML = itemAtual.quantidade;
    numeroItem.dataset.id = itemAtual.id;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += itemAtual.nome;
    novoItem.appendChild(botaoDeletar(itemAtual.id));

    lista.appendChild(novoItem);
}

function atualizarElemento(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}

function deletaElemento(elemento, id) {
    elemento.remove();
    const elementoIndex = itens.findIndex((e) => e.id === id);
    itens.splice(elementoIndex, 1);
    localStorage.setItem("itens", JSON.stringify(itens));
}

function botaoDeletar(id) {
    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerHTML = "X";
    botaoDeletar.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    });

    return botaoDeletar;
}