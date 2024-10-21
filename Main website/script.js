
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