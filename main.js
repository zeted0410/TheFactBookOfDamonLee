const texts = document.querySelectorAll('#texts p');

texts.forEach(text => {
  text.style.opacity = 0;
  
  setTimeout(() => {
    text.style.opacity = 1;
  }, 100 * text.innerHTML.length);
});
