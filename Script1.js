// script.js

// Smooth scrolling for navigation links and hero buttons
document.querySelectorAll('.nav-link, .btn-primary, .btn-secondary').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Section reveal animations on scroll (for About, Technologies, Projects, Contact)
const sections = document.querySelectorAll('.section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', revealSection);
revealSection(); // Initial check on page load

// Form submission (basic - can be enhanced with backend integration)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
// Dynamically count and update total projects in the About badge
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const totalProjects = projectCards.length;
    const badge = document.querySelector('.badge:nth-child(2)'); // Assuming the second badge is for projects
    if (badge) {
        badge.textContent = totalProjects + ' Total Projects';
    }
});