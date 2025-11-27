// script.js
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    // Simulate loading time
    setTimeout(() => {
        // Hide the preloader
        preloader.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            preloader.style.display = 'none'; // Remove from DOM
            content.style.display = 'block'; // Show the main content
        }, 500); // Match this duration with the CSS transition duration
    }, 1300); // Duration to wait before hiding the preloader
});
