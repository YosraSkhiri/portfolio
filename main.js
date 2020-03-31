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

if(document.documentElement.clientWidth <= 768 && currentPage("about.html")){
  jobContent.style.display = "none"
  edu.addEventListener('click', function() {
    if(!showedu){
      eduContent.style.display = "block";
      jobContent.style.display = "none"
      edu.classList.toggle('inactive-tab');
      job.classList.toggle('inactive-tab');
      showedu = true;
    }
  })
  
  job.addEventListener('click', function() {
    if(showedu){
      eduContent.style.display = "none";
      jobContent.style.display = "block"
      job.classList.toggle('inactive-tab');
      edu.classList.toggle('inactive-tab');
      showedu = false;
    }
  })
}

mode.addEventListener('click', function(){
  console.log('hi');
})

function currentPage(page){
  if(page === "index.html" && window.location.href.substr(-4) !== "html") return true;
  return window.location.href.substr(-(page.length)) === page;
}
