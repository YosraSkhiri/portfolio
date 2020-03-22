let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('.nav-links');
let menuOut = false;

hamburger.addEventListener('click', function() {
  if(!menuOut){
    menu.style.animation = "menu-slide-in .3s ease-in forwards";
    menuOut = true;
  }else{
    menu.style.animation = "menu-slide-out .3s ease-out forwards";
    menuOut =false;
  }
    this.classList.toggle('active');
  });


