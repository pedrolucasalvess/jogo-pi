function entrar() {
    document.getElementById('login').classList.remove('ativa');
    document.getElementById('menu').classList.add('ativa');
}

function mostrarTela(tela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(tela).classList.add('ativa');
}
