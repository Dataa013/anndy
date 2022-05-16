$('.turist__items').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
});


const buttonOne = document.querySelector('.pricing__button-one');
const buttonTwo = document.querySelector('.pricing__button-two');

// buttonOne.addEventListener('click', function() {
//     buttonOne.classList.toggle('active');
// });

// buttonTwo.addEventListener('click', function() {
//     buttonTwo.classList.toggle('active');
// })

buttonOne.addEventListener('click', function () {
   if (buttonOne.classList.contains('pricing__button-one')) {
      buttonOne.classList.add('active');
      buttonTwo.classList.remove('active')
   }
});

buttonTwo.addEventListener('click', function () {
   if (buttonTwo.classList.contains('pricing__button-two')) {
      buttonTwo.classList.add('active');
      buttonOne.classList.remove('active')
   }
});

let headerBurger = document.querySelector('.header__burger');
let Mmenu = document.querySelector('.m-menu');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');





headerBurger.addEventListener('click', function () {
   headerBurger.classList.toggle('active');
   Mmenu.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('no-scroll');

})




$('.menu__list-link').click(function (event) {
   event.preventDefault();

   $('.menu').removeClass('active');
   $('.header.fixed').removeClass('active');
   $('.header__burger').removeClass('active');
   $('body').removeClass('no-scroll');
   $('.m-menu').removeClass('active');

   let $this = $(this),
      blockId = $this.data('scroll');
   blockOffset = $(blockId).offset().top - headerH;
   $('html, body').animate({
      scrollTop: blockOffset
   }, 1000)
})




let header = $('.header'),
   headerH = header.innerHeight(),
   scrollOffset = $(window).scrollTop();

// fixed header

checkScroll(scrollOffset)

$(window).on('scroll', function () {
   scrollOffset = $(window).scrollTop();
   checkScroll(scrollOffset)
});

function checkScroll(scrollOffset) {
   if (scrollOffset >= headerH) {
      header.addClass('fixed');
   } else {
      header.removeClass('fixed');
   }
}