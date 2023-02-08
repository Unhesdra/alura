export default function eUmCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    
    if(validarNumerosRepetidos(cpf) || validarPrimeiroDigito(cpf) || validarSegundoDigito(cpf)) {
        campo.setCustomValidity("CPF incorreto! Essa mensagem nunca será mostrada");        
    }
}

function validarNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    return numerosRepetidos.includes(cpf);
}

function validarPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma >= 10) {
        soma = 0;
    }
    
    return soma != cpf[9];
}

function validarSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma >= 10) {
        soma = 0;
    }
    
    return soma != cpf[10];
}