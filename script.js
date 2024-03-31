function sim(){
    alert("Parabéns pela escolha, agora leia o texto e assista ao vídeo :)");
    document.getElementById('videoContainer').style.display = 'block';
}   

function desvia(no) {
    var btn = no;
    btn.style.position = 'absolute';
    btn.style.top = gerarPosicao(10, 90);
    btn.style.right = gerarPosicao(10, 90);
    console.log("opa, desviei...");
}

function gerarPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

function mostrarVideo() {
    var videoContainer = document.getElementById("videoContainer");
    var texto = document.getElementById("texto");

    // Exibe o contêiner do vídeo e oculta o texto
    videoContainer.style.display = "block";
    texto.style.display = "none";
}
