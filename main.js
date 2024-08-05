document.addEventListener('DOMContentLoaded', function(){

    const hero = document.querySelector('.hero');
    const widthHero = hero.clientHeight;

    window.addEventListener('scroll', function(){
        const positionNow = window.scrollY

        if (positionNow<widthHero){
            hiddenElementsHeader()
        }else{
            showElementsHeader()
        }
    })
})

function hiddenElementsHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden');
}

function showElementsHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden');
}