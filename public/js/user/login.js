/* eslint-disable no-undef */
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginDev = document.getElementById('loginForm');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const userData = {
    email: email.value,
    password: password.value,
  };
  // const res = loginSchema.validate(userData);
  if (loginValidation(userData) === true) {
    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.login) {
          window.location.href = '/html/home.html';
        }
      })
      .catch(console.log);
  }
});
