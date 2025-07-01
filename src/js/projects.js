export function initializeProjects() {
  const projectItems = document.querySelectorAll('.project-item');
  const projectsSection = document.getElementById('projects');

  if (!projectItems.length || !projectsSection) return;

  // Handle project hover effects
  projectItems.forEach(item => {
    const imageUrl = item.getAttribute('data-image');
    
    item.addEventListener('mouseenter', () => {
      if (imageUrl) {
        projectsSection.style.backgroundImage = `url(${imageUrl})`;
      }
    });
    
    item.addEventListener('mouseleave', () => {
      projectsSection.style.backgroundImage = '';
    });
  });

  // Auto-cycle through projects (optional)
  let currentIndex = 0;
  let autoPlayInterval;

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      const currentItem = projectItems[currentIndex];
      const imageUrl = currentItem.getAttribute('data-image');
      
      if (imageUrl) {
        projectsSection.style.backgroundImage = `url(${imageUrl})`;
      }
      
      // Add active class for visual feedback
      projectItems.forEach(item => item.classList.remove('active'));
      currentItem.classList.add('active');
      
      currentIndex = (currentIndex + 1) % projectItems.length;
    }, 3000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  // Start auto-play when section is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAutoPlay();
      } else {
        stopAutoPlay();
        projectsSection.style.backgroundImage = '';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(projectsSection);

  // Stop auto-play on user interaction
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', stopAutoPlay);
  });

  // Add CSS for active state
  const style = document.createElement('style');
  style.textContent = `
    .project-item.active h1 {
      opacity: 0.7;
      transform: scale(1.02);
    }
  `;
  document.head.appendChild(style);
}