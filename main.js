let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('.nav-links');
let menuOut = true;

hamburger.addEventListener('click', (e)=>{
    if(!menuOut){
        menu.style.display = "flex";
        menu.style.animation = "menu-slide-in .3s ease-in forwards";
        for(i=0; i < 3; i++){
            hamburger.children[0].children[i].style.stroke="#fff";
        }
        menuOut = true
      
    }else{
        menu.style.animation = "menu-slide-out .3s ease-out forwards";
        for(i=0; i < 3; i++){
            hamburger.children[0].children[i].style.stroke="#000";
        }
        menuOut = false
    }
});


