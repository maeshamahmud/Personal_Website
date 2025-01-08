const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (e) => {
let x = e.clientX;
let y = e.clientY;  

circle.style.left = x + 'px';
circle.style.top = y + 'px';

circle.style.visibility = 'visible';

});

document.addEventListener('mouseleave', (e) => {
circle.style.visibility = 'hidden';
});