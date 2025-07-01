export function initializeFooter(locomotiveInstance) {
  const backToTopButton = document.querySelector('.back-to-top');
  const footerBottom = document.querySelector('.footer-bottom');

  if (!backToTopButton) return;

  // Back to top functionality
  backToTopButton.addEventListener('click', () => {
    if (locomotiveInstance) {
      locomotiveInstance.scrollTo(0, {
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0]
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });

  // Animate footer elements on scroll
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate back to top button
        setTimeout(() => {
          backToTopButton.style.opacity = '1';
          backToTopButton.style.transform = 'translateY(0)';
        }, 200);
        
        // Animate footer bottom
        if (footerBottom) {
          setTimeout(() => {
            footerBottom.style.opacity = '1';
            footerBottom.style.transform = 'translateY(0)';
          }, 400);
        }
      }
    });
  }, {
    threshold: 0.3
  });

  // Observe footer
  const footer = document.querySelector('.footer');
  if (footer) {
    footerObserver.observe(footer);
  }

  // Initial setup for footer bottom
  if (footerBottom) {
    footerBottom.style.opacity = '0';
    footerBottom.style.transform = 'translateY(20px)';
    footerBottom.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  }

  // Add hover effects to footer links
  const footerLinks = document.querySelectorAll('.footer-bottom h1');
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });
}