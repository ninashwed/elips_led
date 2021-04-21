const hamburger = document.querySelector('.header__hamburger'), 
      menu = document.querySelector('.header__nav'),
      closeElem = document.querySelector('.header__nav');

 hamburger.addEventListener('click', () => {
        menu.style.display = 'block';
    });  
    closeElem.addEventListener('click', () => {
        menu.style.display = 'none';
    }); 
    