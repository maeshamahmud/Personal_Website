window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let header = document.querySelector('header');

    if (scrollPosition > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333';
    }
});
