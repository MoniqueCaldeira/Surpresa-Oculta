function revelarMensagem() {
    // Criando a mensagem e adicionando ao HTML via JavaScript
    const mensagemContainer = document.getElementById('mensagem-container');
    mensagemContainer.innerHTML = `
        <h1>Hora do Brinde!!!</h1>
        <img src="surpresa.png" alt="Surpresa">
    `;
    mensagemContainer.style.display = 'block';
}