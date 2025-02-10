let currentSlide = 0;
const slides = document.querySelectorAll(".member");
const totalSlides = slides.length;

function showSlide() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${
    currentSlide * 820
  }px)`; /* Pastikan hanya satu member yang muncul */
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide();
}
