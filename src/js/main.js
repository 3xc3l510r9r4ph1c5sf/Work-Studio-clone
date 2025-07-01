import { initializeLocomotive } from './locomotive.js';
import { initializeLoader } from './loader.js';
import { initializeNavigation } from './navigation.js';
import { initializeProjects } from './projects.js';
import { initializeGallery } from './gallery.js';
import { initializeFooter } from './footer.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize locomotive scroll first
  const locomotiveInstance = initializeLocomotive();
  
  // Initialize other modules
  initializeLoader();
  initializeNavigation();
  initializeProjects();
  initializeGallery();
  initializeFooter(locomotiveInstance);
  
  console.log('Work.Studio initialized successfully');
});