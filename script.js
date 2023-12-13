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

    showSlide(currentSlide);

    const autoAdvance = setInterval(nextSlide, 8000);

    document.querySelector(".slider-container").addEventListener("mouseenter", function () {
        clearInterval(autoAdvance);
    });

    document.querySelector(".slider-container").addEventListener("mouseleave", function () {
        autoAdvance = setInterval(nextSlide, 8000);
    });

    document.querySelector(".prev-arrow").addEventListener("click", function () {
        prevSlide();
    });

    document.querySelector(".next-arrow").addEventListener("click", function () {
        nextSlide();
    });

});



function toggleCard() {
    const article = document.querySelector('.animated-card');
    article.classList.toggle('expanded');
}

/*boton up  */
/* document.getElementById("button-up").addEventListener("click", scrollUp)

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}
buttonUp = document.getElementById("button-up");

window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 100) {
        buttonUp.style.transform = "scale(0)";
    }
} */

/*boton up  */
document.addEventListener('DOMContentLoaded', function () {
    var buttonUp = document.querySelector('.button-up');

    buttonUp.addEventListener('click', function () {
        scrollToTop(500);
    });

    function scrollToTop(duration) {
        var start = document.documentElement.scrollTop;
        var startTime = null;

        function animateScroll(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }

            var elapsedTime = currentTime - startTime;
            var progress = Math.min(elapsedTime / duration, 1);

            document.documentElement.scrollTop = start * (1 - progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        buttonUp.style.transform = scroll > 100 ? 'scale(1)' : 'scale(0)';
    };
});


alert('Please wait');

/* Menu */
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
    menuIcon.classList.toggle("active");
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 430) {
        nav.classList.remove("active");
        menuIcon.classList.remove("active");
    }
});