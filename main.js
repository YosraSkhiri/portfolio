let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('.nav-links');
let edu = document.querySelector('#edu');
let job = document.querySelector('#job');

let eduContent = document.querySelector('#edu-content');
let jobContent = document.querySelector('#job-content');
let menuOut = false;
let showedu = true;

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

if(document.documentElement.clientWidth <= 768 && window.location.href==="http://127.0.0.1:5500/about.html"){
  jobContent.style.display = "none"
  edu.addEventListener('click', function() {
    if(!showedu){
      eduContent.style.display = "block";
      jobContent.style.display = "none"
      showedu = true;
    }
  })
  
  job.addEventListener('click', function() {
    if(showedu){
      eduContent.style.display = "none";
      jobContent.style.display = "block"
      showedu = false;
    }
  })
}



