(function(){
    const abrirM= document.querySelector('.nav__menu');
    const menu= document.querySelector('.nav__link');
    const closeM= document.querySelector('.nav__close');

    abrirM.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });
    closeM.addEventListener('click',()=>{
        menu.classList.remove('nav__link--show');
    });


})();