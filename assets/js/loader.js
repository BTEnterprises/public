// script.js
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const first_element = document.getElementsByClassName("pre-loader");
    const content = document.querySelector('.ccontent');
    // Simulate loading time
    setTimeout(() => {
        // Start fade-out animation
        preloader.remove();
        const first = first_element[0];
        first.remove();
        // Show the main content
        content.style.display = 'block';
    }, 1000); // Duration to wait before starting the fade-out

    // Listen for the end of the fade-out animation
});
