const cursor = document.getElementById('custom-cursor');
const preview = document.getElementById('preview');
const previewImg = preview.querySelector('img');
const films = document.querySelectorAll('.film');

// Custom Cursor and Preview Movement
window.addEventListener('mousemove', (e) => {
    // Move Cursor
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Move Preview Image (with offset to stay clear of cursor)
    preview.style.left = (e.clientX + 40) + 'px';
    preview.style.top = (e.clientY - (preview.offsetHeight / 2)) + 'px';
});

// Hover States
films.forEach(film => {
    film.addEventListener('mouseenter', () => {
        preview.style.opacity = 1;
        previewImg.src = film.dataset.img;
    });

    film.addEventListener('mouseleave', () => {
        preview.style.opacity = 0;
    });
});