function voltar() {
    window.history.back();
}

function toggleMissao(num) {
    let descricao = document.getElementById(`desc${num}`);
    if (descricao.style.display === "block") {
        descricao.style.display = "none";
    } else {
        descricao.style.display = "block";
    }
}
