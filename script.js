function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to handle section visibility
function handleSectionVisibility(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in', 'slide-up');
      observer.unobserve(entry.target);
    }
  });
}

// Create Intersection Observer
const sectionObserver = new IntersectionObserver(handleSectionVisibility, {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // Adjust as needed, determines when to trigger the animation
});

// Observe each section
document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});

// Attach event listeners to navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', handleNavLinksClick);
});





