document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'homepage.html';
});

// Close banner functionality
function closeBanner() {
    document.querySelector('.promo-banner').style.display = 'none';
}

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const username = form.querySelector('input[type="text"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();

    if (username && password) {
        document.getElementById('customAlert').style.display = 'flex';
        form.reset();
    } else {
        alert('Please fill in all fields');
    }
});


// Add hover effects to navigation items
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.opacity = '0.7';
    });
    item.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});

// Add hover effects to social icons
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});