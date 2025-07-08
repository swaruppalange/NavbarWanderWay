// Hamburger toggle animation
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.navbar-toggler');
  const icon = document.getElementById('toggleIcon');

  toggle.addEventListener('click', () => {
    icon.classList.toggle('open');
  });

  // Search bar toggle
  document.getElementById('searchToggle').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('searchBar').classList.toggle('show');
  });

  // Dark mode toggle
  document.getElementById('modeToggle').addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
  });

  // ScrollReveal Animations
  ScrollReveal().reveal('.hero', {
    delay: 200,
    origin: 'top',
    distance: '50px',
    duration: 1000,
    reset: true
  });

  ScrollReveal().reveal('.destination-card', {
    interval: 200,
    distance: '30px',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.reveal-box', {
    interval: 200,
    distance: '30px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-in-out',
    reset: true
  });
});
