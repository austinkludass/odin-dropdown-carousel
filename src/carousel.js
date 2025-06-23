export const carouselIIFE = (() => {
    const init = () => {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const prevBtn = document.querySelector('.arrow-left');
        const nextBtn = document.querySelector('.arrow-right');
        const dotsContainer = document.querySelector('.dots');

        let currentIndex = 0;
        let autoAdvanceInterval = null;

        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        const updateSlide = () => {
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;
            updateDots();
        };

        const updateDots = () => {
            const allDots = document.querySelectorAll('.dot');
            allDots.forEach(dot => dot.classList.remove('active'));
            allDots[currentIndex].classList.add('active');
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide();
        };

        const goToSlide = (index) => {
            currentIndex = index;
            updateSlide();
        };

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoAdvance();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoAdvance();
        });

        const startAutoAdvance = () => {
            autoAdvanceInterval = setInterval(nextSlide, 5000);
        };

        const resetAutoAdvance = () => {
            clearInterval(autoAdvanceInterval);
            startAutoAdvance();
        };

        startAutoAdvance();
    }

    return {
        init
    }
})();