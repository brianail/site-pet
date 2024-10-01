 
        const btnMobile = document.getElementById('btn-mobile');
        const nav = document.getElementById('nav');

        function toggleMenu() {
            const isActive = nav.classList.toggle('active');
            btnMobile.setAttribute('aria-expanded', isActive);
            btnMobile.setAttribute('aria-label', isActive ? 'Fechar Menu' : 'Abrir Menu');
        }

        function closeMenuOnClickOutside(event) {
            if (nav.classList.contains('active') && !nav.contains(event.target) && event.target !== btnMobile) {
                toggleMenu();
            }
        }

        // Adiciona os eventos de clique e toque no botão de menu
        btnMobile.addEventListener('click', toggleMenu);
        btnMobile.addEventListener('touchstart', toggleMenu, {
            passive: true
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', closeMenuOnClickOutside);

        // Fecha o menu ao clicar em qualquer link dentro do nav
        nav.addEventListener('click', (event) => {
            if (event.target.classList.contains('nav-link')) {
                toggleMenu();
            }
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



        let currentIndex = 0;

        function moveSlide(direction) {
            const productGallery = document.querySelector('.product-gallery');
            const totalProducts = document.querySelectorAll('.product').length;

            // Atualiza o índice atual
            currentIndex += direction;

            // Impede que o índice ultrapasse os limites
            if (currentIndex < 0) {
                currentIndex = 0;
            } else if (currentIndex > totalProducts / 2 - 1) {
                currentIndex = Math.floor(totalProducts / 2 - 1);
            }

            // Calcula a nova posição do slider
            const translateX = -currentIndex * 50; // Cada produto ocupa 50% da largura
            productGallery.style.transform = `translateX(${translateX}%)`;
        }
