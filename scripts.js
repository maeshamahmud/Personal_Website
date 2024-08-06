// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
});

function submitName() {
    const nameInput = document.getElementById('nameInput').value;
    const greeting = document.getElementById('greeting');
    if (nameInput.trim() !== '') {
        greeting.textContent = `Hello, ${nameInput}! Welcome to My Professional Website`;
    } else {
        greeting.textContent = 'Hello, World!'+ <br> +'Welcome to My Website';
    }
    closePopup();
}

function skipName() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello, World! '<br>'Welcome to My Website';
    closePopup();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
