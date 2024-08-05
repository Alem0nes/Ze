document.addEventListener('DOMContentLoaded', function(){

    const hero = document.querySelector('.hero');
    const widthHero = hero.clientHeight;

    window.addEventListener('scroll', function(){
        const positionNow = window.scrollY

        if (positionNow<widthHero){
            showElementsHeader()
        }else{
            hiddenElementsHeader()
        }
    })
})

function showElementsHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden');
}

function hiddenElementsHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden');
}