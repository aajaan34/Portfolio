document.addEventListener('DOMContentLoaded', function() {
    // Animate skill meters
    const skillMeters = document.querySelectorAll('.skill-meter');
    
    skillMeters.forEach(meter => {
        const level = meter.getAttribute('data-level');
        const levelBar = meter.querySelector('.skill-level');
        levelBar.style.width = level + '%';
    });
    
    // Download resume button
    const downloadBtn = document.getElementById('download-resume');
    downloadBtn.addEventListener('click', function() {
        // In a real implementation, this would trigger a PDF download
        alert('Downloading resume...');
        // window.location.href = 'path/to/your-resume.pdf';
    });
    
    // Print resume button
    const printBtn = document.getElementById('print-resume');
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // Add animation to project cards when they come into view
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Add hover effect to skill bubbles
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    
    skillBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.querySelector('i').classList.toggle('fa-times');
            });
            
            // Close menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                });
            });
        });
});