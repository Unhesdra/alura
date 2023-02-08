async function listarVideosApi() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criarVideoApi(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo!");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function bucarVideosApi(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listarVideosApi,
    criarVideoApi,
    bucarVideosApi
}