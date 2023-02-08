export default function eMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if(!validarIdade(dataNascimento)) {
        campo.setCustomValidity("Usuário menor de idade! Essa mensagem nunca será mostrada!");
    }
}

function validarIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}