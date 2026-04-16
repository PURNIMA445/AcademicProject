const checkbox = document.getElementById('show-password');
const passwordInput = document.getElementById('password');

if (checkbox && passwordInput) {
  checkbox.addEventListener('change', () => {
    passwordInput.type = checkbox.checked ? 'text' : 'password';
  });
}
