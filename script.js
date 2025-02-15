let slideIndex = 0;
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;

        function showSlide(index) {
            const slidesContainer = document.querySelector(".slides");
            if (index >= totalSlides) slideIndex = 0;
            if (index < 0) slideIndex = totalSlides - 1;
            slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        function nextSlide() {
            slideIndex++;
            showSlide(slideIndex);
        }

        function prevSlide() {
            slideIndex--;
            showSlide(slideIndex);
        }

        document.getElementById("next").addEventListener("click", nextSlide);
        document.getElementById("prev").addEventListener("click", prevSlide);

        setInterval(nextSlide, 3000); // Auto slide every 3 seconds