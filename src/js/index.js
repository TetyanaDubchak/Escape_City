
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
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        navigation: false
      },

      1920: {
        spaceBetween:26,
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

// Invest Swiper
document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;

  const initSwiper = () => {
    if (window.matchMedia('(max-width: 1919px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-invest', {
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

// Invest Show-more
const showMoreBtn = document.querySelector('.invest-btn');
showMoreBtn.addEventListener('click', () => {
  const investContainer = document.querySelector('.invest-container');
  const hiddenItems = document.querySelectorAll('.invest-picture-item.hidden');
  hiddenItems.forEach(item => item.classList.remove('hidden'));
  showMoreBtn.style.display = 'none';
  investContainer.classList.add('expanded');
})

// Builder Path Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-build-path', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 8,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
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

// Apartment Swiper
document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;

  const initSwiper = () => {
    if (window.matchMedia('(max-width: 1919px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-apartment-list', {
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

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-apartment-plan', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        navigation: false
      },
      1920: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 50,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
    }
  });
})

// Events Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-events', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        navigation: false
      },
      1920: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
    }
  });
})

// Offices Swiper
document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;

  const initSwiper = () => {
    if (window.matchMedia('(max-width: 1919px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-offices', {
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

// Mobile menu
const openMobileMenu = document.querySelector('.header-burger-btn');
const closeMobileMenu = document.querySelector('.header-close-icon');
const mobileMenu = document.querySelector('.header-menu-wrapper');
const body = document.body;
const menuLinks = document.querySelectorAll('.header-menu-wrapper a');

const toggleMenu = () => {
    const isMenuOpen = openMobileMenu.getAttribute('aria-expanded') === 'true' || false;
    openMobileMenu.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (mobileMenu.classList.contains('is-open')) {
      bodyLock();
    } else {
      bodyUnLock();
    }
};

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        openMobileMenu.setAttribute('aria-expanded', false);
        bodyUnLock();
    });
});
  
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