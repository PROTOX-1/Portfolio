// Small bobbling animation on scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }
  });
});
