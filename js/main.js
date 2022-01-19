let elHeader = document.querySelector(".site-header");
let elHeaderHamburgBtn = document.querySelector(".site-header__hamburg-btn");

elHeaderHamburgBtn.addEventListener('click', function(){
    elHeader.classList.toggle("site-header--open");
});
