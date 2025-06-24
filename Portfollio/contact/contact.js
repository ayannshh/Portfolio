// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAOzEDXUoGE5Vn77zBF2GeaAVFzXNVXx2E",
  authDomain: "myportfoliocontact-73cac.firebaseapp.com",
  projectId: "myportfoliocontact-73cac",
  storageBucket: "myportfoliocontact-73cac.appspot.com",
  messagingSenderId: "652254302065",
  appId: "1:652254302065:web:fa72d1e014533bc7fdf0d0",
  measurementId: "G-QEM32XJXVN",
  databaseURL: "https://myportfoliocontact-73cac-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert("❗ Please fill in all the fields.");
        return;
    }

    try {
        const messagesRef = ref(db, 'messages');
        const newMsg = push(messagesRef);

        await set(newMsg, {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        alert(`✅ Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    } catch (error) {
        alert("❌ Failed to send message: " + error.message);
        console.error("Firebase error:", error);
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.background = window.scrollY > 100 ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Parallax floating dots
window.addEventListener('mousemove', (e) => {
    const dots = document.querySelectorAll('.floating-dot');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    dots.forEach((dot, i) => {
        const speed = (i + 1) * 0.3;
        const xPos = (x - 0.5) * speed * 50;
        const yPos = (y - 0.5) * speed * 50;
        dot.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});
