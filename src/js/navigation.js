export function initializeNavigation() {
  const nav = document.getElementById('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const fullMenu = document.getElementById('full-menu');
  const fullContainer = document.querySelector('.full-container');
  const navLogo = document.querySelector('.nav-logo svg');
  const navLinks = document.querySelectorAll('.nav-links h2, .nav-toggle');

  let isMenuOpen = false;

  // Toggle menu function
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      // Open menu
      fullMenu.style.transform = 'scaleY(1)';
      fullMenu.style.opacity = '1';
      navToggle.style.transform = 'rotate(-90deg)';
      
      // Animate menu items
      const menuItems = fullContainer.querySelectorAll('h2');
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 100);
      });
      
      // Animate bottom items
      setTimeout(() => {
        const bottomItems = document.querySelectorAll('.full-bottom h1');
        bottomItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
          }, index * 100);
        });
      }, 300);
      
    } else {
      // Close menu
      const menuItems = fullContainer.querySelectorAll('h2');
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '0';
          item.style.transform = 'translateX(100px)';
        }, index * 50);
      });
      
      setTimeout(() => {
        fullMenu.style.transform = 'scaleY(0)';
        fullMenu.style.opacity = '0';
        navToggle.style.transform = 'rotate(45deg)';
      }, 200);
    }
  }

  // Add click event to toggle
  navToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking on menu items
  const menuItems = fullContainer.querySelectorAll('h2');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });

  // Navigation color change on scroll
  function updateNavColor() {
    const scrollY = window.scrollY;
    const projectsSection = document.getElementById('projects');
    const gallerySection = document.getElementById('gallery');
    
    if (!projectsSection || !gallerySection) return;
    
    const projectsTop = projectsSection.offsetTop;
    const galleryTop = gallerySection.offsetTop;
    
    if (scrollY >= projectsTop && scrollY < galleryTop) {
      // In projects section - white nav
      navLogo.style.color = 'white';
      navLinks.forEach(link => {
        link.style.color = 'white';
      });
    } else {
      // Default - black nav
      navLogo.style.color = 'black';
      navLinks.forEach(link => {
        link.style.color = 'black';
      });
    }
  }

  // Navigation padding change on scroll
  function updateNavPadding() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.style.padding = '15px 50px';
    } else {
      nav.style.padding = '20px 50px';
    }
  }

  // Add scroll listeners
  window.addEventListener('scroll', () => {
    updateNavColor();
    updateNavPadding();
  });

  // Initial setup
  updateNavColor();
}