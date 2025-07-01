export function initializeLoader() {
  const loader = document.getElementById('loader');
  const yellow1 = document.getElementById('yellow1');
  const yellow2 = document.getElementById('yellow2');
  const loaderText = document.querySelector('.loader-text');

  // Create timeline for loader animation
  const timeline = {
    duration: 2500,
    steps: [
      {
        element: yellow1,
        property: 'transform',
        value: 'translateY(-100%)',
        delay: 300,
        duration: 700
      },
      {
        element: yellow2,
        property: 'transform',
        value: 'translateY(100%)',
        delay: 900,
        duration: 700
      },
      {
        element: loaderText,
        property: 'color',
        value: 'black',
        delay: 1200,
        duration: 500
      },
      {
        element: loader,
        property: 'opacity',
        value: '0',
        delay: 1800,
        duration: 400
      }
    ]
  };

  // Execute animation steps
  timeline.steps.forEach(step => {
    setTimeout(() => {
      step.element.style.transition = `${step.property} ${step.duration}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      
      if (step.property === 'transform') {
        step.element.style.transform = step.value;
      } else if (step.property === 'color') {
        step.element.style.color = step.value;
      } else if (step.property === 'opacity') {
        step.element.style.opacity = step.value;
      }
    }, step.delay);
  });

  // Remove loader from DOM
  setTimeout(() => {
    loader.style.display = 'none';
    document.body.style.overflow = 'visible';
  }, timeline.duration);
}