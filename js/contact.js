document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('customForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data to your form handler
            console.log('Form submitted:', {
                name: name,
                email: email,
                phone: document.getElementById('phone').value.trim(),
                service: document.getElementById('service').value,
                message: document.getElementById('message').value.trim()
            });
            
            // Show success message (in a real implementation, this would be after successful server response)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});