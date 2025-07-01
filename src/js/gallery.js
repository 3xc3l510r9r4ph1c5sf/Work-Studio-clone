export function initializeGallery() {
  const galleryImages = document.querySelectorAll('.gallery-image');

  if (!galleryImages.length) return;

  // Add intersection observer for lazy loading and animations
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const img = image.querySelector('img');
        
        // Add loaded class for animation
        image.classList.add('loaded');
        
        // Unobserve after loading
        imageObserver.unobserve(image);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Observe all gallery images
  galleryImages.forEach(image => {
    imageObserver.observe(image);
  });

  // Add stagger animation for gallery items
  galleryImages.forEach((image, index) => {
    image.style.opacity = '0';
    image.style.transform = 'translateY(50px)';
    image.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
      image.style.opacity = '1';
      image.style.transform = 'translateY(0)';
    }, index * 100);
  });

  // Enhanced hover effects
  galleryImages.forEach(image => {
    const overlay = image.querySelector('.image-overlay');
    const img = image.querySelector('img');
    
    image.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
      overlay.style.opacity = '1';
    });
    
    image.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      overlay.style.opacity = '0';
    });
  });

  // Add CSS for loaded state
  const style = document.createElement('style');
  style.textContent = `
    .gallery-image.loaded {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    
    .gallery-image:hover {
      z-index: 10;
    }
  `;
  document.head.appendChild(style);
}