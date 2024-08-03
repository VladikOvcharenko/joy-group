const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.top = '10px';
  } else {
    header.style.top = '50px';
  }
});
