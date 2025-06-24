// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
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
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// CV Download functionality
document.getElementById('downloadCV').addEventListener('click', function (e) {
    e.preventDefault();

    // Replace this with your actual CV file path
    const cvUrl = 'https://www.canva.com/design/DAGp2jkr8iw/pbml51Ltjsa528s9D9_lXA/edit?utm_content=DAGp2jkr8iw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';

    // Create download link
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mark_Junior_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

   
});


// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Typing effect for role text
const roleText = document.querySelector('.role-highlight');
const roles = ['Frontend Developer', 'UI/UX Designer', 'Web Developer','Problem Solver'];
let currentRole = 0;
let currentChar = 0;
let isDeleting = false;

function typeRole() {
    const current = roles[currentRole];

    if (isDeleting) {
        roleText.textContent = current.substring(0, currentChar - 1);
        currentChar--;
    } else {
        roleText.textContent = current.substring(0, currentChar + 1);
        currentChar++;
    }

    if (!isDeleting && currentChar === current.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeRole, speed);
}

// Start typing effect after page load
setTimeout(typeRole, 2000);

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

// Animated counters for stats
function animateCounter(element, targetValue, duration = 2000) {
    const startValue = 0;
    const increment = targetValue / (duration / 16); // 16ms per frame
    let currentValue = startValue;

    const updateCounter = () => {
        currentValue += increment;
        if (currentValue < targetValue) {
            element.textContent = Math.ceil(currentValue);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = targetValue;
        }
    };

    updateCounter();
}

// Initialize counters when stats come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(document.getElementById('github-repos'), 42);
            animateCounter(document.getElementById('twitter-followers'), 1200);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.social-stats'));