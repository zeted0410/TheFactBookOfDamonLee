const texts = document.querySelectorAll('#texts p');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';  
      entry.target.style.opacity = 1;
    }
  });
}, {
  threshold: 0.5
});

texts.forEach(text => {
  observer.observe(text);
});

// Optional scroll to top
window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});
