const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 2000);
