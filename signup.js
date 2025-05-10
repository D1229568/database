document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'homepage.html';
});

// Close banner functionality
function closeBanner() {
    document.querySelector('.promo-banner').style.display = 'none';
}

// Form submission handling
// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     const form = this;
//     const username = form.querySelector('input[type="text"]').value.trim();
//     const password = form.querySelector('input[type="password"]').value.trim();
//
//     if (username && password) {
//         document.getElementById('customAlert').style.display = 'flex';
//         form.reset();
//     } else {
//         alert('Please fill in all fields');
//     }
// });

//form submission handling(username and password and name and email and phone number and country and city and address)
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const username = form.querySelector('input[name="username"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const phoneNumber = form.querySelector('input[name="phone"]').value.trim();
    const country = form.querySelector('input[name="country"]').value.trim();
    const city = form.querySelector('input[name="city"]').value.trim();
    const address = form.querySelector('input[name="address"]').value.trim();

    if (username && password && name && email && phoneNumber && country && city && address) {
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

const cartIcon = document.querySelector('.cart-icons');
const cartContent = document.getElementById('cartContent');

// Saat mouse masuk ke icon, tampilkan cart
cartIcon.addEventListener('mouseenter', () => {
    cartContent.classList.add('active');
});

// Saat mouse keluar dari kotak cart, sembunyikan
cartContent.addEventListener('mouseleave', () => {
    cartContent.classList.remove('active');
});