document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const agree = document.getElementById('agree');
        
        let isValid = true;
        
        // Reset error states
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
        
        // Validate required fields
        if (!firstName.value.trim()) {
            showError(firstName.parentElement, 'First name is required');
            isValid = false;
        }
        
        if (!lastName.value.trim()) {
            showError(lastName.parentElement, 'Last name is required');
            isValid = false;
        }
        
        if (!email.value.trim()) {
            showError(email.parentElement, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email.parentElement, 'Please enter a valid email');
            isValid = false;
        }
        
        if (!subject.value) {
            showError(subject.parentElement, 'Please select a subject');
            isValid = false;
        }
        
        if (!message.value.trim()) {
            showError(message.parentElement, 'Message is required');
            isValid = false;
        }
        
        if (!agree.checked) {
            showError(agree.parentElement.parentElement, 'You must agree to the privacy policy');
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid - submit via AJAX or other method
            submitForm();
        }
    });
    
    function showError(element, message) {
        element.classList.add('error');
        
        let errorElement = element.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            element.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function submitForm() {
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        
        // Remove any existing error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
    }
});