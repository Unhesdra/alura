let btnOerdenar = document.getElementById("btnOrdenarPorPreco");

btnOerdenar.addEventListener("click", ordenarLivros);

function ordenarLivros() {
    let livrosOrdenados = livros.sort((a,b) => a.preco > b.preco);
    exibirLivros(livrosOrdenados);
}