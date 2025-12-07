// Main JavaScript for Elena Martinez Photography Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTextAnimations();
    initMobileMenu();
    initTestimonialsSlider();
    initScrollAnimations();
    initSmoothScrolling();
    
    console.log('Elena Martinez Photography Portfolio - Loaded Successfully');
});

// Text Reveal Animations
function initTextAnimations() {
    // Split text for animations
    Splitting();
    
    // Animate hero text on load
    const textElements = document.querySelectorAll('.text-reveal');
    
    anime({
        targets: textElements,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: anime.stagger(200, {start: 500}),
        easing: 'easeOutCubic'
    });
    
    // Animate portfolio items on scroll
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 600,
                    easing: 'easeOutCubic'
                });
                portfolioObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        portfolioObserver.observe(item);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate menu items
            if (!mobileMenu.classList.contains('hidden')) {
                const menuItems = mobileMenu.querySelectorAll('a');
                anime({
                    targets: menuItems,
                    opacity: [0, 1],
                    translateX: [-20, 0],
                    duration: 300,
                    delay: anime.stagger(50),
                    easing: 'easeOutCubic'
                });
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Testimonials Slider
function initTestimonialsSlider() {
    const testimonialsSlider = document.getElementById('testimonials-slider');
    
    if (testimonialsSlider) {
        new Splide('#testimonials-slider', {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '1rem'
                }
            }
        }).mount();
    }
}

// Scroll Animations
function initScrollAnimations() {
    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 600,
                    easing: 'easeOutCubic'
                });
                serviceObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        serviceObserver.observe(card);
    });
    
    // Animate testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    scale: [0.95, 1],
                    duration: 600,
                    easing: 'easeOutCubic'
                });
                testimonialObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        testimonialObserver.observe(card);
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        header.style.backdropFilter = 'blur(5px)';
    }
});

// Portfolio Item Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.overlay');
        
        item.addEventListener('mouseenter', function() {
            if (overlay) {
                anime({
                    targets: overlay,
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (overlay) {
                anime({
                    targets: overlay,
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            }
        });
    });
});

// Service Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('svg');
            if (icon) {
                anime({
                    targets: icon,
                    scale: [1, 1.1],
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('svg');
            if (icon) {
                anime({
                    targets: icon,
                    scale: [1.1, 1],
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            }
        });
    });
});

// Button Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: [1, 1.05],
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: [1.05, 1],
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });
});

// Loading Animation
window.addEventListener('load', function() {
    // Hide any loading states and reveal content
    const loadingElements = document.querySelectorAll('.loading');
    
    loadingElements.forEach(element => {
        element.style.display = 'none';
    });
    
    // Animate page entrance
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutCubic'
    });
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance Optimization
const debouncedScroll = debounce(function() {
    // Handle scroll events efficiently
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Add any scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Console Message
console.log('%c⚡ Elena Martinez Photography Portfolio', 'color: #A8B5A0; font-size: 16px; font-weight: bold;');
console.log('%c✨ Crafted with attention to detail and artistic vision', 'color: #2C3E50; font-size: 12px;');