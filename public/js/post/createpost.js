/* eslint-disable no-undef */
const postForm = document.getElementById('postForm');
const postBtn = document.querySelector('.post');
const titleInput = document.querySelector('.post-title');
const imgInput = document.querySelector('.post-img');
const contentInput = document.querySelector('.post-Area');
const updateBtn = document.querySelector('.update');

if (localStorage.getItem('postData')) {
  postBtn.textContent = 'Save';
  const postObj = JSON.parse(localStorage.getItem('postData'));
  console.log(postObj);
  titleInput.value = postObj.title;
  imgInput.value = postObj.img;
  contentInput.value = postObj.content;
  // localStorage.clear();
  postBtn.style.display = 'none';
  updateBtn.style.display = 'block';
  updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/post/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleInput.value,
        imageUrl: imgInput.value,
        content: contentInput.value,
        postId: postObj.id,
      }),

    }).then((data) => data.json())
      .then((data) => {
        if (!data.error) {
          window.location.href = '/page/home';
          localStorage.clear();
        } else {
          throw new Error('Unauthorized');
        }
      })
      .catch(console.log);
  });
} else {
  postBtn.style.display = 'block';
  updateBtn.style.display = 'none';
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
}
