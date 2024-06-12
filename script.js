function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
document.addEventListener('DOMContentLoaded', () => {
  const desktopNav = document.getElementById('desktop-nav');
  const showAfterScroll = 600;

  window.addEventListener('scroll', () => {
    if (window.scrollY > showAfterScroll) {
      desktopNav.classList.add('visible-nav');
      desktopNav.classList.remove('hidden-nav');
    } else {
      desktopNav.classList.add('hidden-nav');
      desktopNav.classList.remove('visible-nav');
    }
  });
});