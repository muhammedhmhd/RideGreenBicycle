// Add scroll event listener to toggle the 'scrolled' class and blur effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const body = document.body;

  if (window.scrollY > 50) { // Change 50 to the scroll threshold you prefer
      navbar.classList.add('scrolled');
      body.classList.add('blur-effect'); // Add blur effect
  } else {
      navbar.classList.remove('scrolled');
      body.classList.remove('blur-effect'); // Remove blur effect
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Close the mobile menu when clicking a nav link
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
});

// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  this.reset();
});
