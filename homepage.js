//kalau logonya di klik akan ke homepage
document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'homepage.html';
});

//buat supaya saat sign up di klik, akan menuju ke sign up page
document.querySelector('.announcement-text span').addEventListener('click', function() {
    window.location.href = 'signup.html';
});

// Close announcement bar
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.announcement-bar').style.display = 'none';
    document.body.style.paddingTop = '5px'; // kembali ke 20px
});

//when i click the cart icon, it will go to the cart page
document.querySelector('.cart-icon').addEventListener('click', function() {
    window.location.href = 'cart.html';
});

// Shop Now button
document.querySelector('.shop-now-btn').addEventListener('click', function() {
    alert('Taking you to our shop collection!');
});

// Product hover effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', function() {
        alert('Product details coming soon!');
    });
});

// View All buttons
const viewAllButtons = document.querySelectorAll('.view-all-btn');
viewAllButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Loading more products...');
    });
});

// Category cards
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = card.querySelector('.category-title').textContent.trim();
        alert(`Browsing ${categoryName} category`);
    });
});

// Testimonial carousel
const testimonialGrid = document.querySelector('.testimonial-grid');
const testimonials = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.prev-testimonial');
const nextButton = document.querySelector('.next-testimonial');
let currentIndex = 0;

prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateTestimonialPosition();
    }
});

nextButton.addEventListener('click', function() {
    if (currentIndex < testimonials.length - 3) {
        currentIndex++;
        updateTestimonialPosition();
    }
});

function updateTestimonialPosition() {
    const cardWidth = testimonials[0].offsetWidth + 20; // Width + gap
    testimonialGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    testimonialGrid.style.transition = 'transform 0.5s ease';
}

// Navigation dropdown simulation
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    if (item.querySelector('img')) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Dropdown menu coming soon!');
        });
    }
});

// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        alert(`Searching for: ${this.value}`);
        this.value = '';
    }
});

// Cart and wishlist icons
const cartIcons = document.querySelectorAll('.cart-icons img');
cartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const iconType = this.alt;
        alert(`Opening ${iconType}`);
    });
});