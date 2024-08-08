document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const widthHero = hero.clientHeight;

    window.addEventListener('scroll', function() {
        const positionNow = window.scrollY;

        if (positionNow < widthHero) {
            showElementsHeader();
        } else {
            hiddenElementsHeader();
        }
a
        changeActiveLink();
    });

    const sections = document.querySelectorAll('section');
    const navSelect = document.querySelectorAll('.header__content__menu a');

    function changeActiveLink() {
        let index = sections.length;

        if (window.scrollY === 0) {
            navSelect.forEach((link) => link.classList.remove('active'));
            return;
        }

        while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

        navSelect.forEach((link) => link.classList.remove('active'));

        if (index > 0) {
            navSelect[index - 1].classList.add('active');
        }
    }

    navSelect.forEach((link) => link.classList.remove('active'));

    changeActiveLink();

    const video = document.getElementById('trailerVideo');
    const soundIcon = document.getElementById('icon_sound');

    // Função para alternar som
    function toggleSound() {
        if (video.muted) {
            video.muted = false;
            soundIcon.classList.remove('fa-volume-mute');
            soundIcon.classList.add('fa-volume-up');
        } else {
            video.muted = true;
            soundIcon.classList.remove('fa-volume-up');
            soundIcon.classList.add('fa-volume-mute');
        }
    }
    
    // Adiciona o evento de clique ao ícone de som
    soundIcon.addEventListener('click', toggleSound);
    

    // Define o estado inicial do ícone baseado no estado do vídeo
    if (video.muted) {
        soundToggle.classList.add('sound-off');
    } else {
        soundToggle.classList.add('sound-on');
    }
});



function showElementsHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function hiddenElementsHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}