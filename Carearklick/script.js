
  // card slide
  new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
// FEEDBACK SECTION

const swiperElement = document.querySelector(".swiper");
const swiperWrapper = swiperElement.querySelector(".swiper-wrapper");
const swiperSlides = swiperElement.querySelectorAll(".swiper-slide");
swiperSlides.forEach((slide,_) => {
    const clonedSlide = slide.cloneNode(true);
    swiperWrapper.appendChild(clonedSlide);
});
const swiper = new Swiper(swiperElement, {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
// Add event listeners to buttons
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Handle button click event
    console.log('Button clicked!');
  });
});

// Add event listener to search input
document.querySelector('.input').addEventListener('input', (e) => {
  // Handle search input event
  console.log('Search input changed!');
});
// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        alert(`Searching for: ${this.value}`);
        // In a real application, you would handle the search here
    }
});

