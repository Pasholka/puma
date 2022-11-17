const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  
  // Navigation arrows
 navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});





let buy = document.querySelector('.buy');
let button = document.querySelectorAll('.button_buy');
button.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    buy.classList.add('buy_hidden');
  })
})
document.querySelector('.close').onclick = function (e){
   e.preventDefault();
  buy.classList.remove('buy_hidden');
}
document.querySelector('.button_go').onclick = function (e){
   e.preventDefault();
  buy.classList.remove('buy_hidden');
}