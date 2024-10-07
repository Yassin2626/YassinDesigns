// Toggle Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Hamburger Menu Functionality
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the menu visibility
    menuToggle.classList.toggle('active'); // Toggle the hamburger to X animation
});

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Wrap around to the last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Wrap around to the first slide
    }
    showSlide(currentSlide);
}

// Initialize AOS (Animate On Scroll Library)
AOS.init();

// Show the first slide on load
showSlide(currentSlide);

// Contact form submission feedback (add this if you want to handle the contact form)
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission feedback
    formFeedback.classList.remove('hidden');
    formFeedback.textContent = 'Message sent successfully!';
    contactForm.reset();
});. 