let currentIndex = 1;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const carousel = document.querySelector('.carousel');
carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition() {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToNextSlide() {
    if (currentIndex >= totalSlides - 1) {
        currentIndex = 1;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            currentIndex++;
            updateSlidePosition();
        }, 50);
    } else {
        currentIndex++;
        updateSlidePosition();
    }
}

function moveToPrevSlide() {
    if (currentIndex <= 0) {
        currentIndex = totalSlides - 2;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            currentIndex--;
            updateSlidePosition();
        }, 50);
    } else {
        currentIndex--;
        updateSlidePosition();
    }
}

function startAutoSlide() {
    setInterval(() => {
        moveToNextSlide();
    }, 6000);
}

startAutoSlide();








