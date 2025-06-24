// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 20, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 20, 0.95)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Scroll animations
function animateOnScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const techCards = document.querySelectorAll('.tech-card');
    const achievementCards = document.querySelectorAll('.achievement-card');
    const focusItems = document.querySelectorAll('.focus-item');
    
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.classList.add('visible');
        }
    });
    
    techCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.classList.add('visible');
        }
    });
    
    achievementCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.classList.add('visible');
        }
    });
    
    focusItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.classList.add('visible');
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