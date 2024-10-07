function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let header = document.querySelector('header');

    if (scrollPosition > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333';
    }
});
