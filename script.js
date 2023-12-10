document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Initial display
    showSlide(currentSlide);

    // Auto-advance to the next slide every 3000 milliseconds (3 seconds)
    const autoAdvance = setInterval(nextSlide, 8000);

    // Pause auto-advance on hover
    document.querySelector(".slider-container").addEventListener("mouseenter", function () {
        clearInterval(autoAdvance);
    });

    // Resume auto-advance on mouse leave
    document.querySelector(".slider-container").addEventListener("mouseleave", function () {
        autoAdvance = setInterval(nextSlide, 8000);
    });

    // Navigation arrow click events
    document.querySelector(".prev-arrow").addEventListener("click", function () {
        prevSlide();
    });

    document.querySelector(".next-arrow").addEventListener("click", function () {
        nextSlide();
    });

});



