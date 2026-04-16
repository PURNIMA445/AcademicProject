const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');

if (menuBtn && navBar) {
  menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navBar.contains(e.target)) {
      navBar.classList.remove('show');
    }
  });
}
