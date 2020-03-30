let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('.nav-links');
let edu = document.querySelector('#edu');
let job = document.querySelector('#job');
let mode = document.querySelector('#mode');

let eduContent = document.querySelector('#edu-content');
let jobContent = document.querySelector('#job-content');
let menuOut = false;
let showedu = true;

let computerIllu = document.querySelector('#computer');
let rightIllu = document.querySelector('#right-illu');
let leftIllu = document.querySelector('#left-illu');
let mvtEnv = document.querySelector('body');

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

mode.addEventListener('click', function(){
  console.log('hi');
})

if(document.documentElement.clientWidth >= 1024 && window.location.href==="http://127.0.0.1:5500/index.html"){

mvtEnv.addEventListener('mousemove', function(e){
  let coord = computerIllu.getBoundingClientRect();
  let coordllu1 = rightIllu.getBoundingClientRect();
  let coordllu2 = leftIllu.getBoundingClientRect();

  let xDistance = e.pageX - coord.x;
  let yDistance = e.pageY - coord.y;

  computerIllu.style.left = (-xDistance/40)+'px';
  computerIllu.style.top = (-yDistance/30)+'px';
  computerIllu.style.transition = 'ease-in-out'

  let illxDistance = 2*e.pageX - (coordllu2.x + coordllu1.x);
  let illyDistance = 2*e.pageY - (coordllu2.y + coordllu1.y);

  rightIllu.style.right = (-illxDistance/60)+'px';
  rightIllu.style.top = (illyDistance/30)+'px';
  rightIllu.style.transition = 'ease-in-out';

  leftIllu.style.left = (illxDistance/60)+'px';
  leftIllu.style.bottom = (-illyDistance/30)+'px';
  leftIllu.style.transition = 'ease-in-out';
})

}

