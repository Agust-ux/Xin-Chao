// Toggle Dark Mode
if (sessionStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.input').checked = true;
    document.querySelector('.Toggle p').textContent = 'Light Mode:-'; // Set the text to 'Light Mode' when dark mode is enabled
} else {
    document.querySelector('.Toggle p').textContent = 'Dark Mode:-'; // Set the default text to 'Dark Mode'
}

document.querySelector('.input').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        sessionStorage.setItem('darkMode', 'enabled');
        document.querySelector('.Toggle p').textContent = 'Light Mode:-'; // Update text to 'Light Mode'
    } else {
        document.body.classList.remove('dark-mode');
        sessionStorage.setItem('darkMode', 'disabled');
        document.querySelector('.Toggle p').textContent = 'Dark Mode:-'; // Update text to 'Dark Mode'
    }
});

// Hover Effect with JavaScript
window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#Mer a img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease-in-out';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
