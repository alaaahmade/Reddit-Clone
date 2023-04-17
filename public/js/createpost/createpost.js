/* eslint-disable no-undef */
const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const objData = Object.fromEntries(data);
  if (postValidation(objData) === true) {
    fetch('/post/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objData),
    }).then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          window.location.href = '/page/home';
        }
      })
      .catch(console.log);
  } else {
    console.log(postValidation(objData));
  }
});
