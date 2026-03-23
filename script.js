const cursor = document.getElementById('custom-cursor');
const preview = document.getElementById('preview');
const previewImg = preview.querySelector('img');
const films = document.querySelectorAll('.film');

// Smooth movement logic
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Use requestAnimationFrame for smoother rendering
    requestAnimationFrame(() => {
        // Move Custom Cursor
        if (cursor) {
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotate(-30deg)`;
        }

        // Move Preview Image (centered to mouse with offset)
        if (preview) {
            const yOffset = preview.offsetHeight / 2;
            preview.style.left = (mouseX + 45) + 'px';
            preview.style.top = (mouseY - yOffset) + 'px';
        }
    });
});

// Hover logic for Film titles
films.forEach(film => {
    film.addEventListener('mouseenter', () => {
        const imgPath = film.getAttribute('data-img');
        if (imgPath) {
            previewImg.src = imgPath;
            preview.style.opacity = '1';
        }
    });

    film.addEventListener('mouseleave', () => {
        preview.style.opacity = '0';
    });
});
