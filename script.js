// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Anime card hover effect enhancement
document.addEventListener('DOMContentLoaded', function() {
    const animeCards = document.querySelectorAll('.anime-card');
    
    animeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Simulate loading anime data (in a real app, this would be an API call)
    console.log('Loading anime data...');
    
    // You could add more interactive features here like:
    // - Search functionality
    // - Favorite button
    // - Rating system
    // - etc.
});

// Example of additional functionality you might add:
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // You would need to add dark mode styles in CSS
}