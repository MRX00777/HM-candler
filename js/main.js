const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});




const swiperOne = new Swiper('.feedback__slider', {

    loop: true,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
    },

});



const swiperTwo = new Swiper('.certificates__slider', {

    loop: true,
    slidesPerView: "3",
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
    },

});


// const accordeon = document.querySelector('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__title');


accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle) {
    accordeonTitle.addEventListener('click', function() {

        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

        accordeonTitle.classList.toggle('accordeon__title--active');
        currentText.classList.toggle('accordeon__text--visible');

        const arrowImg = accordeonTitle.querySelector('.accordion-arrow');

        if(currentText.classList.contains('accordeon__text--visible')){
            currentText.style.display = "block"
            arrowImg.src = "./images/arrow-top.png"
        } else {
            currentText.style.display = "none"
            arrowImg.src = "./images/arrow-down.png"
        }

    })
})