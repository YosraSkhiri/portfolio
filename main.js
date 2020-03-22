let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('.nav-links');
let menuOut = false;

console.log(hamburger.children[0])

hamburger.addEventListener('click', ()=>{
    if(!menuOut){
        menu.style.display = "flex";
        menu.style.animation = "menu-slide-in .3s ease-in forwards";
        hamburger.children[0].style.animation = "top-line .4s ease-in forwards";
        hamburger.children[1].style.animation = "mid-line .4s ease-in forwards";
        hamburger.children[2].style.animation = "bottom-line .4s ease-in forwards";
        for(i=0; i < 3; i++){
            hamburger.children[i].style.background="#fff";
        }
        menuOut = true
      
    }else{
        menu.style.animation = "menu-slide-out .3s ease-out forwards";
        hamburger.children[0].style.animation = "top-line .4s ease-in forwards reverse";
        hamburger.children[1].style.animation = "mid-line .4s ease-in forwards reverse";
        hamburger.children[2].style.animation = "bottom-line .4s ease-in forwards reverse";
        for(i=0; i < 3; i++){
            hamburger.children[i].style.background="#000";
        }
        menuOut = false
    }
});


