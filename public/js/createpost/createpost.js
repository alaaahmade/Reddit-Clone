const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const objData = Object.fromEntries(data);
  // eslint-disable-next-line no-undef
  console.log(postValidation(objData));
});
