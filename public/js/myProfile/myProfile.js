/* eslint-disable no-undef */
const setting = document.querySelector('.sitting');
const sideBarBtn = document.querySelectorAll('#sid-bar-btn');
const sittingBtn = document.querySelector('.list');
const rightSideBarBtn = document.querySelectorAll('#right-sid-bar-btn');
const friendsList = document.querySelector('.friends');

sittingBtn.addEventListener('click', () => {
  if (setting.style.display === 'none') {
    setting.style.display = 'block';
  } else {
    setting.style.display = 'none';
  }
});

sideBarBtn.forEach((btn) => {
  const classN = btn.classList[0];
  const list = document.querySelector(`div.${classN}`);
  btn.addEventListener('click', () => {
    if (list.style.display === 'none') {
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
  });
});

rightSideBarBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const classN = btn.classList[0];
    const list = document.querySelector(`div.right-${classN}`);
    if (list.style.display === 'none') {
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
  });
});

fetch('/user/myProfile')
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    const profileName = document.querySelector('.profile-name');
    const profileUserName = document.querySelector('.profile-userName');
    profileUserName.textContent = data[0].username;
    profileName.textContent = data[0].username;
    createPost(data);
  })
  .catch(console.log);

friendsList.addEventListener('click', () => {
  fetch('/user/friends')
    .then((data) => data.json())
    .then(console.log)
    .catch(console.log);
});