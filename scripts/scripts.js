function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('show');
  }  

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Functionality
const signupButton = document.querySelectorAll('a[href="#signup"]');
const modal = document.getElementById('signup');
const closeButton = document.querySelector('.close-button');

signupButton.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
