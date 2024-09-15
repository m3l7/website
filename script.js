// Toggle show/hide for job details
document.getElementById('show-more').addEventListener('click', function() {
    const jobDetails = document.querySelectorAll('.job .job-details');
    jobDetails.forEach(details => {
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            document.getElementById('show-more').textContent = 'Show Less';
        } else {
            details.style.display = 'none';
            document.getElementById('show-more').textContent = 'Show More';
        }
    });
});

// Theme switcher (light/dark mode)
let isDarkMode = false;
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').textContent = 'Switch to Dark Mode';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation and submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
    } else {
        alert('Please fill in all fields.');
    }
});
