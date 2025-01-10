
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
    speed: 800,
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 40,
      scale: 0.9,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      0: {
        spaceBetween:8,
      },

      1199: {
        spaceBetween: 32,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      1399: {
        slidesPerView:4.8,
      }
    }
  });
})


// Information Swiper

document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;

  const initSwiper = () => {
    if (window.matchMedia('(max-width: 1398px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-information', {
          direction: 'horizontal',
          loop: true,
          spaceBetween: 16, 
          breakpoints: {
            0: {
              slidesPerView: 1.5,
            },

            767: {
              slidesPerView: 2.4,
            },
             991: {
              slidesPerView: 2.5,
            },
          }
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
    if (window.matchMedia('(max-width: 1198px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-invest', {
          direction: 'horizontal',
          loop: true,
          spaceBetween: 16,
          slidesPerView: 1.25,
          breakpoints: {
            0: {
              slidesPerView: 1.25,
            },

            767: {
              slidesPerView: 1.75,
            },
             991: {
              slidesPerView: 2.5,
            },
          }
        });
      }
    } else if (swiperInstance) { 
      swiperInstance.destroy(true, true); 
      swiperInstance = null; 
    }
  };

  initSwiper();

  window.matchMedia('(max-width: 1198px)').addEventListener('change', initSwiper);
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

// Invest Show overlay
const showOverlayButtons = document.querySelectorAll('.invest-picture-item');
showOverlayButtons.forEach((item) => {
  item.addEventListener('click', () => {
  const visibleText = item.querySelector('.invest-overlay');
  visibleText.classList.add('open');
  })
  
  item.addEventListener('mouseleave', () => {
    const visibleText = item.querySelector('.invest-overlay');
    visibleText.classList.remove('open');
  })
})


// Builder Path Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-build-path', {
   direction: 'horizontal',
    loop: true,
    speed: 800,
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 40,
      scale: 0.9,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      0: {
        spaceBetween:8,
      },

      1199: {
        spaceBetween: 32,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      1399: {
        slidesPerView: 4.8,
        spaceBetween: 32,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  });
})

// Apartment Swiper
document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;

  const initSwiper = () => {
    if (window.matchMedia('(max-width: 1398px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-apartment-list', {
           direction: 'horizontal',
          loop: true,
          spaceBetween: 16, 
          breakpoints: {
            0: {
              slidesPerView: 1.5,
            },

            767: {
              slidesPerView: 2.4,
            },
             991: {
              slidesPerView: 3.5,
            },
          }
        });
      }
    } else if (swiperInstance) { 
      swiperInstance.destroy(true, true); 
      swiperInstance = null; 
    }
  };

  initSwiper();

  window.matchMedia('(max-width: 1398px)').addEventListener('change', initSwiper);
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-apartment-plan', {
    direction: 'horizontal',
    speed:800,
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    centeredSlides: true,
    effect: "coverflow",
      coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 40,
      scale: 0.9,
      modifier: 1,
      slideShadows: false,
        },
    breakpoints: {
      0: {
      slidesPerView: 1.3,
      },
      767: {
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 2.6,
      },
      1199: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: "coverflow",
        coverflowEffect: {
        rotate: 0,
        stretch: 310,
        depth: 40,
        scale: 0.7,
        modifier: 1,
        slideShadows: false,
          },
        },
    }
  });
})

// Events Swiper
document.addEventListener('DOMContentLoaded', () => {
  const currentItemElement = document.querySelector('.events-cols-current-item');
  const totalItemElement = document.querySelector('.events-cols-all-item');

  const swiper = new Swiper('.swiper-events', {
    direction: 'horizontal',
    loop: true,
    speed: 800,
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
      rotate: 10,
      stretch: 10,
      depth: 40,
      scale: 0.9,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      0: {
        spaceBetween: 12,
        slidesPerView:1.3,
      },
      767: {
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 2.6,
      },
      1199: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 84,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
      },
      1779: {
        spaceBetween: 90,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
      }
    },
     on: {
      init: function () {
        updateCustomPagination(this);
      },
      slideChange: function () {
        updateCustomPagination(this);
      }
    }
  })

  function updateCustomPagination(swiperInstance) {
    const currentSlide = swiperInstance.realIndex + 1;
    const totalSlides = swiperInstance.slides.length;
    currentItemElement.textContent = currentSlide;
    totalItemElement.textContent = totalSlides;
  }
})

// Offices Swiper
document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;

  const initSwiper = () => {
    if (window.matchMedia('(max-width: 1398px)').matches) {
      if (!swiperInstance) { 
        swiperInstance = new Swiper('.swiper-offices', {
          direction: 'horizontal',
          loop: true,
          spaceBetween: 16,
          slidesPerView: 1.25, 
          breakpoints: {
             0: {
              slidesPerView: 1.25,
            },

            767: {
              slidesPerView: 2.75,
            },
             991: {
              slidesPerView: 3.4,
            },
          }
        });
      }
    } else if (swiperInstance) { 
      swiperInstance.destroy(true, true); 
      swiperInstance = null; 
    }
  };

  initSwiper();

  window.matchMedia('(max-width: 1398px)').addEventListener('change', initSwiper);
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
  
// Modal Suggestion

const modalOpenBtn = document.querySelector(".hero-link-call");
const modalCloseBtn = document.querySelector(".modal-suggestion-close-btn");
const bodySuggestion = document.querySelector('body');
const modalSuggestion = document.querySelector('.backdrop');
let isModalOpen = false;

modalOpenBtn.addEventListener('click', modalOpen);
function modalOpen() {
  const form = document.querySelector(".modal-suggestion-form");

  modalSuggestion.classList.remove("is-hidden");
  bodyLockSuggestion();
  isModalOpen = true;

  document.addEventListener('keydown', onEscOrClick);
  modalSuggestion.addEventListener('click', onEscOrClick);

  function onEscOrClick(e) {
    if (e.key === 'Escape' || e.target === modalSuggestion) {
      console.log(e.target);
      modalClose();
      document.removeEventListener('keydown', onEscOrClick);
      modalSuggestion.removeEventListener('click', onEscOrClick);
    }
  }

  if (!form) {
    return;
  }

  form.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    modalClose();

    e.target.reset();
    form.removeEventListener('submit', onSubmit);
  }
}

modalCloseBtn.addEventListener('click', modalClose)

function modalClose() {
  modalSuggestion.classList.add('is-hidden');
  isModalOpen = false;
  modalSuggestion.addEventListener('transitionend', onTransitionEnd);

  function onTransitionEnd() {
    modalSuggestion.removeEventListener('transitionend', onTransitionEnd);
    bodyUnLockSuggestion();
  }
  bodyUnLockSuggestion();
}

function bodyLockSuggestion() {
  const scrollbarWidth = window.innerWidth - bodySuggestion.offsetWidth + 'px';
  const bodyPaddingRight = bodySuggestion.style.paddingRight;

  bodySuggestion.style.overflow = 'hidden';
  bodySuggestion.style.paddingRight = !bodyPaddingRight ? scrollbarWidth : bodyPaddingRight;
}

function bodyUnLockSuggestion() {
  if (!isModalOpen) {
    bodySuggestion.style.removeProperty('overflow');
    bodySuggestion.style.removeProperty('padding-right');
  }
}