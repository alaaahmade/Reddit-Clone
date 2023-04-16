/* eslint-disable no-undef */
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const userData = {
    email: email.value,
    password: password.value,
  };
  if (loginValidation(userData) === true) {
    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.login) {
          window.location.href = '/page/home';
        }
      })
      .catch(console.log);
  } else {
    console.log(loginValidation(userData));
  }
});
