const form = document.querySelector('#login-form');
const password = document.querySelector('#password');
const toggle = document.querySelector('.show-password');

toggle.addEventListener('click', () => {
  const showing = password.type === 'text';
  password.type = showing ? 'password' : 'text';
  toggle.textContent = showing ? 'Show' : 'Hide';
  toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');
  const passwordError = document.querySelector('#password-error');
  emailError.textContent = email.validity.valid ? '' : 'Enter a valid email address.';
  passwordError.textContent = password.validity.valid ? '' : 'Password must have at least 8 characters.';
  if (email.validity.valid && password.validity.valid) alert('Demo only: authentication would be called here.');
});
