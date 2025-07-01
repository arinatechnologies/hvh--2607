document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider functionality
    const testimonialContainer = document.querySelector('.testimonial-container');
    if (testimonialContainer) {
        let currentIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        const totalTestimonials = testimonials.length;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        
        // Only run slider if there are multiple testimonials
        if (totalTestimonials > 1) {
            // Initially show first testimonial
            showTestimonial(currentIndex);
            
            // Auto-rotate testimonials every 5 seconds
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalTestimonials;
                showTestimonial(currentIndex);
            }, 5000);
        }
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});