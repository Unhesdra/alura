const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", ()  => recognition.start());

function onSpeak(e) {
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificarSeChuteValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>`;
}