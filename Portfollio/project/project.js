// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 20, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 20, 0.95)';
    }
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinksContainer.style.display = navLinksContainer.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Animation on scroll
function animateOnScroll() {
    const projectCards = document.querySelectorAll('.project-card');
    const statCards = document.querySelectorAll('.stat-card');
    
    projectCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
    
    statCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Parallax effect for floating dots
window.addEventListener('mousemove', (e) => {
    const dots = document.querySelectorAll('.floating-dot');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    dots.forEach((dot, index) => {
        const speed = (index + 1) * 0.3;
        const xPos = (x - 0.5) * speed * 50;
        const yPos = (y - 0.5) * speed * 50;
        dot.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});