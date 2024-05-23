document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector('.carrossel-button.prev');
    const nextButton = document.querySelector('.carrossel-button.next');
    const images = document.querySelectorAll('.carrossel-images img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});
