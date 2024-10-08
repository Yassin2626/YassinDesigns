// JavaScript for project slider
let currentProjectIndex = 0;

function changeProjectSlide(direction) {
    const projects = document.querySelectorAll('.project-box');
    projects[currentProjectIndex].classList.remove('active');
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    projects[currentProjectIndex].classList.add('active');
}

// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1200,
});

// Stars and Reviews
document.addEventListener("DOMContentLoaded", () => {
    const reviews = [
        {
            image: "url1", 
            text: "Yassin is a talented developer who delivered exceptional work!", 
            name: "Client A",
            stars: "★★★★★"
        },
        {
            image: "url2", 
            text: "I highly recommend Yassin for any programming project!", 
            name: "Client B",
            stars: "★★★★★"
        },
        {
            image: "url3", 
            text: "Fantastic work, very satisfied!", 
            name: "Client C",
            stars: "★★★★★"
        },
        {
            image: "url4", 
            text: "Yassin’s skills are unmatched!", 
            name: "Client D",
            stars: "★★★★★"
        },
        {
            image: "url5", 
            text: "Best developer I've worked with!", 
            name: "Client E",
            stars: "★★★★★"
        },
    ];

    const reviewContainer = document.querySelector('.review-container');
    reviewContainer.innerHTML = reviews.map(review => `
        <div class="review-box">
            <img src="${review.image}" alt="${review.name}" class="client-image">
            <blockquote>
                <p>"${review.text}" - ${review.name}</p>
                <div class="stars">${review.stars}</div>
            </blockquote>
        </div>
    `).join('');
});