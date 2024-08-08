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

    changeActiveLink();

    const video = document.getElementById('trailerVideo');
    const soundIcon = document.getElementById('icon_sound');

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

    soundIcon.addEventListener('click', toggleSound);
    
    if (video.muted) {
        soundIcon.classList.add('sound-off');
    } else {
        soundIcon.classList.add('sound-on');
    }

    function showElementsHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    function hiddenElementsHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    const lightbox = document.getElementById('lightBox');
    const lightboxImage = document.getElementById('lightBoxImg');
    const myImages = document.getElementsByClassName('fotogafia');
    const closeButton = document.getElementsByClassName('close')[0];

    for (let i = 0; i < myImages.length; i++) {
        myImages[i].onclick = function() {
            lightbox.style.display = "flex"; 
            lightboxImage.src = this.src; 
        }
    }

    closeButton.onclick = function() {
        lightbox.style.display = "none";
    }

    lightbox.onclick = function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    }
});