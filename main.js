let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('.nav-links');

console.log(hamburger.children[0].children)

hamburger.addEventListener('click', (e)=>{
    if(menu.style.display === "none"){
        menu.style.display = "flex"
        hamburger.style.fill = '#fff';
        hamburger.children[0].children[0].style.stroke="#fff"
        hamburger.children[0].children[1].style.stroke="#fff"
        hamburger.children[0].children[2].style.stroke="#fff"
      
    }else{
        menu.style.display = "none"
        hamburger.children[0].children[0].style.stroke="#707070"
        hamburger.children[0].children[1].style.stroke="#707070"
        hamburger.children[0].children[2].style.stroke="#707070"
    }
});


