let livros = [];
const endpointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosApi();

async function getBuscarLivrosApi() {
    const resposta = await fetch(endpointApi);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}