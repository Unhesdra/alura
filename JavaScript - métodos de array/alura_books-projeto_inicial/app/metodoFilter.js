const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => botao.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = livros.filter(livro => {
        if(categoria == "disponivel") {
            return livro.quantidade > 0;
        } else {
            return livro.categoria == categoria
        }
    });

    exibirLivros(livrosFiltrados);

    if(categoria == "disponivel") {
        const valorTotal = calcularValorTotal(livrosFiltrados);
        exibirValorTotal(valorTotal);
    }
}

function exibirValorTotal(valorTotal) {
    elementoLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}