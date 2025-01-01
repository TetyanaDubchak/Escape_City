
const handleTextExpanded = (text,btn) => {
    const isExpanded = text.classList.toggle('expanded');
    btn.textContent = isExpanded ? 'Менше' : 'Детальніше';    
}

// About
const aboutText = document.querySelector('.about-text');
const aboutBtn = document.querySelector('.about-btn');


aboutBtn.addEventListener('click', ()=>handleTextExpanded(aboutText,aboutBtn));

// Gallery Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-gallery', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 28,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        centeredSlides: true,
        navigation: false
      },
      1920: {
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
    
    }
  });
})


// Information Swiper

document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;

  const initSwiper = () => {
    if (window.matchMedia('(max-width: 1919px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-information', {
          direction: 'horizontal',
          loop: true,
          spaceBetween: 16,
          slidesPerView: 1.25, 
        });
      }
    } else if (swiperInstance) { 
      swiperInstance.destroy(true, true); 
      swiperInstance = null; 
    }
  };

  initSwiper();

  window.matchMedia('(max-width: 1920px)').addEventListener('change', initSwiper);
});

// Location

const locationText = document.querySelector('.location-text');
const locationBtn = document.querySelector('.location-btn');

locationBtn.addEventListener('click', () => handleTextExpanded(locationText, locationBtn))

// Mobile menu
const openMobileMenu = document.querySelector('.header-burger-btn');
const closeMobileMenu = document.querySelector('.header-close-icon');
const mobileMenu = document.querySelector('.header-menu-wrapper');
const body = document.body;

const toggleMenu = () => {
  console.dir('click');
    const isMenuOpen = openMobileMenu.getAttribute('aria-expanded') === 'true' || false;
    openMobileMenu.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (mobileMenu.classList.contains('is-open')) {
      bodyLock();
    } else {
      bodyUnLock();
    }
};
  
openMobileMenu.addEventListener('click', toggleMenu);
closeMobileMenu.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 1920px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMobileMenu.setAttribute('aria-expanded', false);
    bodyUnLock();
  });

  function bodyLock() {
    body.style.overflow = 'hidden';
  }

  function bodyUnLock() {
    body.style.removeProperty('overflow');
  }