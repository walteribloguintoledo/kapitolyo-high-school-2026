
history.replaceState({}, '', '/portfolio');

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
  });
}, { threshold: 0.3 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});