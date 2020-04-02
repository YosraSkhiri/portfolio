let menu = document.querySelector('.nav-links');
let menuOut = false;
let linkPage = window.location.href.substr(40) === '' ? 'index.html': window.location.href.substr(40);

document.querySelector('li.nav-link > a[href="' + linkPage + '"] > span').classList.add('active');

document.querySelector('#hamburger').addEventListener('click', function () {
  if (!menuOut) {
    menu.style.animation = 'menu-slide-in .3s ease-in forwards';
    menuOut = true;
  } else {
    menu.style.animation = 'menu-slide-out .3s ease-out forwards';
    menuOut = false;
  }
  this.classList.toggle('active');
});

let edu = document.querySelector('#edu');
let job = document.querySelector('#job');
let eduContent = document.querySelector('#edu-content');
let jobContent = document.querySelector('#job-content');
let showedu = true;

if (document.documentElement.clientWidth <= 768 && currentPage('about.html')) {
  jobContent.style.display = 'none';
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

let mode = document.querySelector('#mode');

let colors = [
  'bg-color',
  'text-color',
  'primary-color',
  'secondary-color',
  'btn-primary-color',
  'btn-secondary-color',
  'btn-primary-bg-aftr-color',
  'btn-primary-deact-color',
  'btn-scondary-bg-aftr-color',
  'separator-border-color',
  'card-bg-color',
  'ham-color',
  'active-nav-link-mobile',
  'btn-primary-deact-color',
  'btn-scondary-deact-color'
];

let lightColors = [
  '#fcfcfc',
  '#464646',
  '#ffff00',
  '#72d9e0',
  '#72d9e0',
  '#ffff00',
  '#55a7ac',
  '#579ca1',
  '#acac06',
  'rgba(0, 0, 0, 0.2)',
  'rgba(255, 255, 255, 0.6)',
  '#242424',
  'rgb(74, 194, 202)',
  '#579ca1',
  '#b9b950'
]

//Set the cookie
if (document.cookie === null || document.cookie === '') {
  document.cookie = 'mode=light; path=/; max-age=‭172800‬';
}

//Get the current mode from the cookie
let currentMode = document.cookie.split(';')[0].substr(5);

//Adjust the theme according to the current mode
if (currentMode === 'dark') {
  changeColors(currentMode, 'light');
  changeIllustrations(currentMode);
}

//Change the theme
mode.addEventListener('click', function () {

  if (currentMode === 'light') {

    document.cookie = 'mode=dark; path=/; max-age=‭172800';
    currentMode = document.cookie.split(';')[0].substr(5);

    changeColors(currentMode, 'light');
    changeIllustrations(currentMode);

  } else {
    document.cookie = 'mode=light; path=/; max-age=‭172800';
    currentMode = document.cookie.split(';')[0].substr(5);

    for (let i = 0; i < colors.length; i++) {
      document.documentElement.style.setProperty('--light-' + colors[i], lightColors[i]);
    }
    changeIllustrations(currentMode);
  }

})

function currentPage(page) {

  if (page === 'index.html' && window.location.href.substr(-4) !== 'html') return true;
  return window.location.href.substr(-(page.length)) === page;
}

function changeIllustrations(currentMode) {

  if (currentPage('index.html')) {
    document.querySelector('#computer').src = 'img/' + currentMode + '/main_illustration.svg';
  }
  mode.children[0].src = 'img/' + currentMode + '/mode.svg';
  document.querySelector('#right-illu').src = 'img/' + currentMode + '/right_illu.svg';
  document.querySelector('#left-illu').src = 'img/' + currentMode + '/left_illu.svg';
  document.querySelector('#github').src = 'img/' + currentMode + '/github_icon.svg';
  document.querySelector('#linkedin').src = 'img/' + currentMode + '/linkedin_icon.svg';
  document.querySelector('#mail').src = 'img/' + currentMode + '/mail_icon.svg';
}

function changeColors(currentMode, lastMode) {

  for (let i = 0; i < colors.length; i++) {
    document.documentElement.style.setProperty('--' + lastMode + '-' + colors[i], getComputedStyle(document.documentElement)
      .getPropertyValue('--' + currentMode + '-' + colors[i]));
  }
}