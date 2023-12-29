// dropdown menu

let productMenu = document.getElementById('productMenu');
let dropdowns = document.querySelector('.dropdowns');
let dropdown1 = Array.from(document.querySelectorAll('.dropdown1 > li'));
let dropdown2 = Array.from(document.querySelectorAll('.dropdown2 > li'));
let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));
let hamIcon = document.getElementById('hamIcon');
let mobileMenu = document.getElementById('mobileMenu');
let languageLi = document.querySelector('.nav-item.dropdown');

hamIcon.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
})

accordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('.bi-chevron-up').classList.toggle('active');
  })
})
productMenu.addEventListener('mouseover', function () {
  this.parentElement.nextElementSibling.classList.add('active');
})

dropdown1.forEach((item) => {
  item.addEventListener('mouseover', function () {
    dropdown1.forEach((li) => li.classList.remove('active'));
    item.classList.add('active');
    let tabId = item.dataset.id;
    dropdown2.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    })
  })
});
dropdowns.addEventListener('mouseleave', function () {
  dropdowns.classList.remove('active');
})

// swiper
var banner = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 80,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var products = new Swiper(".products", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 34,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var blog = new Swiper(".blog", {
  loop: true,
  autoplay: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
  breakpoints: {
    992: {
      slidesPerView: 1.7,
    },
    1200: {
      slidesPerView: 2.7,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// filter

let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    filterBtn.forEach((items) => {
      items.nextElementSibling.classList.remove('active');
      items.querySelector('svg').classList.remove('active');
    })
    item.nextElementSibling.classList.add('active');
    item.querySelector('svg').classList.add('active');
  })
})

// audio

$(function () {
  $('audio').audioPlayer();
});

// accordion

let accordionBtn2=Array.from(document.getElementsByClassName('accordion-btn'));

accordionBtn2.forEach((item)=>{
  item.addEventListener('click',function () {
    accordionBtn2.forEach((items)=>{
      items.nextElementSibling.classList.remove('active');
      items.querySelector('svg').classList.remove('active');
    });
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
  })
})

//  product slider

let smallImg=Array.from(document.getElementsByClassName('smallImgs'));
let bigImg=document.getElementById('bigImg');

smallImg.forEach((item)=>{
    item.addEventListener('click',function () {
        let imgSrc=item.querySelector('img').src;
        bigImg.src=imgSrc;
    })
})