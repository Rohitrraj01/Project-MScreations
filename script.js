// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Submission Handling
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting the default way
  
      // Get form data
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Validate form fields
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Send form data to Formspree
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            alert('Thank you! Your message has been sent.');
            form.reset(); // Clear the form
          } else {
            alert('Oops! Something went wrong. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Oops! Something went wrong. Please try again.');
        });
    });
  });