/* ========================================
   Typed Text Effect
   ======================================== */
class TypedEffect {
    constructor(element, strings, options = {}) {
        this.element = element;
        this.strings = strings;
        this.typeSpeed = options.typeSpeed || 60;
        this.deleteSpeed = options.deleteSpeed || 35;
        this.pauseTime = options.pauseTime || 2000;
        this.currentString = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.timeout = null;
        this.tick();
    }

    tick() {
        const current = this.strings[this.currentString];
        if (this.isDeleting) {
            this.currentChar--;
        } else {
            this.currentChar++;
        }

        this.element.textContent = current.substring(0, this.currentChar);

        let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.currentChar === current.length) {
            delay = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentString = (this.currentString + 1) % this.strings.length;
            delay = 400;
        }

        this.timeout = setTimeout(() => this.tick(), delay);
    }

    restart() {
        clearTimeout(this.timeout);
        this.currentString = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.element.textContent = '';
        this.tick();
    }
}

/* ========================================
   Counter Animation
   ======================================== */
function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    });
}

/* ========================================
   Scroll Reveal
   ======================================== */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.skill-category, .project-card, .timeline-item, .edu-card, .highlight-card, .pub-item, .contact-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/* ========================================
   Active Nav Link
   ======================================== */
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));
}

/* ========================================
   Init
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // Language
    const savedLang = localStorage.getItem('lang') || 'fr';
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    if (savedLang !== 'fr') {
        setLanguage(savedLang);
    }

    // Typed effect
    const typedEl = document.querySelector('.typed-text');
    const initialStrings = translations[currentLang]['hero.typed'];
    window.typedInstance = new TypedEffect(typedEl, initialStrings);

    // Nav scroll effect
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    // Mobile menu
    const menuToggle = document.getElementById('nav-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // Counter animation on scroll
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) statsObserver.observe(statsEl);

    // Init other features
    initScrollReveal();
    initActiveNav();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
