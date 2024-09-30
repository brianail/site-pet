const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
    header.classList.toggle('menu-open');
});

// Exibe o popup após alguns segundos ou em resposta a algum evento
window.onload = function () {
    setTimeout(function () {
        document.getElementById('promoPopup').style.display = 'flex';
    }, 2000); // Exibe o popup após 2 segundos
};

// Fecha o popup quando o botão de fechar for clicado
document.getElementById('closePopup').onclick = function () {
    document.getElementById('promoPopup').style.display = 'none';
};

// Fecha o popup se o usuário clicar fora do conteúdo
window.onclick = function (event) {
    var popup = document.getElementById('promoPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
};

// Seleciona o carrossel
const carousel = document.getElementById('carousel');
const clone = carousel.innerHTML; // Clona o conteúdo do carrossel

// Duplica os itens do carrossel
carousel.innerHTML += clone;

// JavaScript para fazer o botão vibrar automaticamente
const whatsappButton = document.querySelector('.whatsapp-button');

function startVibrating() {
whatsappButton.classList.add('vibrating');
}

function stopVibrating() {
whatsappButton.classList.remove('vibrating');
}

// Iniciar a vibração a cada 5 segundos
setInterval(() => {
startVibrating();
setTimeout(stopVibrating, 1000); // Para a vibração após 1 segundo
}, 5000);