// Burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let closeBtn = document.querySelector('.close');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {

    menu.classList.add('header__nav--active');

    document.body.classList.add('stop-scroll');
});

closeBtn.addEventListener('click', function() {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
});

menuLinks.forEach(function(elem) {
    elem.addEventListener('click', function() {

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');        
    });
});

// Searchbox
let search = document.querySelector('.header__searchbox');
let searchBtn = document.querySelector('.header__search');
let searchCloseBtn = document.querySelector('.searchbox__close');

searchBtn.addEventListener('click', function() {

    search.classList.add('header__searchbox--active');

    searchBtn.classList.add('header__search--disabled');

})

searchCloseBtn.addEventListener('click', function() {

    search.classList.remove('header__searchbox--active');

    searchBtn.classList.remove('header__search--disabled');

})

document.addEventListener( 'click', (e) => {
	const withinBoundaries1 = e.composedPath().includes(searchBtn);
    const withinBoundaries2 = e.composedPath().includes(search);
 
	if ( ! withinBoundaries1 && ! withinBoundaries2 ) {
        
		search.classList.remove('header__searchbox--active');

        searchBtn.classList.remove('header__search--disabled');
    }
})

// Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: false,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    centeredSlides: true,
    rewind: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,        
      },

  // Accessibility
    a11y: {
      paginationBulletMessage: 'Перейти к следующему слайду'
    },

  // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});

// Tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.stages__content');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
    
        tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function (element) { element.classList.remove('stages__content--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('stages__content--active');
    });
});

$('.accordion__list').accordion({
    heightStyle: 'content',
    active: false,
    collapsible: true
});