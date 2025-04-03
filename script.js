document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
        
        
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f5f5f5"/%3E%3Ctext x="50%" y="50%" font-family="Arial" font-size="10" text-anchor="middle" dominant-baseline="middle" fill="%23999"%3EImage not available%3C/text%3E%3C/svg%3E';
            this.alt = 'Image not available';
            this.classList.add('loaded');
        });
    });

    
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }

    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.facility-card, .trainer-card, .price-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    
    const animatedElements = document.querySelectorAll('.facility-card, .trainer-card, .price-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });

    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});