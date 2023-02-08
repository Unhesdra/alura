function aplicarDesconto(livros) {
    const desconto = 0.3;
    const livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco * (1 - desconto)};
    });

    return livrosComDesconto;
}