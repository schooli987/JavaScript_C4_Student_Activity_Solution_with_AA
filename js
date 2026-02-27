let index = 0;
const slides = 3; // total number of slides
const carousel = document.getElementById("carousel");

// Function to show current slide
function showSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Next slide function
function nextSlide() {
  index = (index + 1) % slides;
  showSlide();
}

// Previous slide function (optional)
function prevSlide() {
  index = (index - 1 + slides) % slides;
  showSlide();
}

// Auto slide
let autoSlide = setInterval(nextSlide, 4000);

// Pause auto slide on hover
const carouselContainer = carousel.parentElement;

carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlide); // Stop auto sliding
});

carouselContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(nextSlide, 4000); // Resume auto sliding
});
