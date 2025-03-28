document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for nav links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // "Hire Me" button action
  document.querySelector('.hire-btn').addEventListener('click', function() {
    alert('Contact me at: k.kalaivanikumar.27@gmail.com\nPhone: 7289172781');
  });

  // "See Projects" button scrolls to Portfolio section
  document.querySelector('.projects-btn').addEventListener('click', function() {
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
  });
});