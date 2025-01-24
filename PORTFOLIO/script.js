// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && message) {
      alert(Thank you, ${name}! Your message has been sent.);
      this.reset(); // Reset the form
    } else {
      alert('Please fill in all fields before submitting.');
    }
  });