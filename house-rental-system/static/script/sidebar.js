document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  // Guard: only run if sidebar exists on this page
  if (!hamburger || !sidebar) return;

  // Restore saved state on page load
  if (localStorage.getItem('sidebarState') === 'true') {
    sidebar.classList.add('open');
    document.body.classList.add('sidebar-open');
  }

  // Toggle sidebar on hamburger click
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
    localStorage.setItem('sidebarState', sidebar.classList.contains('open'));
  });

  // Prevent sidebar from closing when clicking links inside it
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
});