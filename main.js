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
let rightIlluBg = document.querySelector('#right-illu-bg');
let leftIlluBg = document.querySelector('#left-illu-bg');
let github = document.querySelector('#github');
let linkedin = document.querySelector('#linkedin');
let mail = document.querySelector('#mail');


hamburger.addEventListener('click', function () {
  if (!menuOut) {
    menu.style.animation = 'menu-slide-in .3s ease-in forwards';
    menuOut = true;
  } else {
    menu.style.animation = 'menu-slide-out .3s ease-out forwards';
    menuOut = false;
  }
  this.classList.toggle('active');
});

if (document.documentElement.clientWidth <= 768 && currentPage('about.html')) {
  jobContent.style.display = 'none'
  edu.addEventListener('click', function () {
    if (!showedu) {
      eduContent.style.display = 'block';
      jobContent.style.display = 'none';
      edu.classList.toggle('inactive-tab');
      job.classList.toggle('inactive-tab');
      showedu = true;
    }
  })

  job.addEventListener('click', function () {
    if (showedu) {
      eduContent.style.display = 'none';
      jobContent.style.display = 'block';
      job.classList.toggle('inactive-tab');
      edu.classList.toggle('inactive-tab');
      showedu = false;
    }
  })
}

let colors = [
  'bg-color',
  'text-color',
  'primary-color',
  'secondary-color'
];

let lightColors = [
  '#fcfcfc',
  '#464646',
  '#ffff00',
  '#72d9e0'
]

if (document.cookie === null || document.cookie === '') {
  document.cookie = 'mode=light; path=/; max-age=‭172800‬';
}

let currentMode = document.cookie.split(';')[0].substr(5);

if (currentMode === 'dark') {
  for (let i = 0; i < colors.length; i++) {
    document.documentElement.style.setProperty('--light-' + colors[i], getComputedStyle(document.documentElement)
      .getPropertyValue('--dark-' + colors[i]));
  }
  mode.children[0].src = 'img/light_mode.svg';

  if (currentPage('index.html')) {
    computerIllu.src = 'img/main_illustration_dark.svg';
  }
  rightIllu.src = 'img/right_illu_dark.svg';
  leftIllu.src = 'img/left_illu_dark.svg';

  github.src = 'img/github_icon_dark.svg';
  linkedin.src = 'img/linkedin_icon_dark.svg';
  mail.src = 'img/mail_icon_dark.svg';
}

mode.addEventListener('click', function () {

  if (currentMode === 'light') {
    document.cookie = 'mode=dark; path=/; max-age=‭172800';
    currentMode = document.cookie.split(';')[0].substr(5);

    for (let i = 0; i < colors.length; i++) {
      document.documentElement.style.setProperty('--light-' + colors[i], getComputedStyle(document.documentElement)
        .getPropertyValue('--dark-' + colors[i]));
    }
    mode.children[0].src = 'img/light_mode.svg';
    rightIllu.src = 'img/right_illu_dark.svg';
    leftIllu.src = 'img/left_illu_dark.svg';
    if (currentPage('index.html')) {
      computerIllu.src = 'img/main_illustration_dark.svg';
    }
    github.src = 'img/github_icon_dark.svg';
    linkedin.src = 'img/linkedin_icon_dark.svg';
    mail.src = 'img/mail_icon_dark.svg';

  } else {
    document.cookie = 'mode=light; path=/; max-age=‭172800';
    currentMode = document.cookie.split(';')[0].substr(5);

    for (let i = 0; i < colors.length; i++) {
      document.documentElement.style.setProperty('--light-' + colors[i], lightColors[i]);
    }
    mode.children[0].src = 'img/Night_mode.svg';
    rightIllu.src = 'img/right_illu.svg';
    leftIllu.src = 'img/left_illu.svg';
    if (currentPage('index.html')) {
      computerIllu.src = 'img/main_illustration.svg';
    }
    github.src = 'img/github_icon.svg';
    linkedin.src = 'img/linkedin_icon.svg';
    mail.src = 'img/mail_icon.svg';
  }

})

function currentPage(page) {
  if (page === 'index.html' && window.location.href.substr(-4) !== 'html') return true;
  return window.location.href.substr(-(page.length)) === page;
}
