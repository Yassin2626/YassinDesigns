// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Contact Form Handling (optional)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add your form submission logic, like sending an email or storing data
    const feedback = document.getElementById('form-feedback');
    feedback.textContent = "Thank you for your message!";
    feedback.classList.remove('hidden');
    this.reset(); // Clear the form
});

// Initialize AOS (Animate on Scroll)
AOS.init();