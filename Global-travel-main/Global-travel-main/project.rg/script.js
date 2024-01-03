let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');
let frombtn = document.querySelector('#login-btn');
let loginfrom = document.querySelector('.login-from-container');
let fromclose = document.querySelector('#from-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


windowscroll = () => {
    Btn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginfrom.classList.remove('active');

};

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchbtn.addEventListener('click', () => {
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
    });

frombtn.addEventListener('click', () => {
    loginfrom.classList.add('active');
});


fromclose.addEventListener('click', () => {
    loginfrom.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });

});

