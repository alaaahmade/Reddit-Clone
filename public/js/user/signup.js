/* eslint-disable no-undef */
const signUpForm = document.getElementById('signupForm');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = new FormData(signUpForm);
  const data = Object.fromEntries(obj);
  if (validation(data) === true) {
    fetch('/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then(() => fetch('/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password }),
      }))
      .then((res) => res.json())
      .then((dat) => {
        if (dat.login === true) {
          window.location.reload();
        }
      })
      .catch(console.log);
  } else {
    console.log(validation(data));
  }
});
