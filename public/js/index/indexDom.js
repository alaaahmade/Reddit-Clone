const rightSideBarBtn = document.querySelectorAll('#right-sid-bar-btn');
const sideBarBtn = document.querySelectorAll('#sid-bar-btn');
const setting = document.querySelector('.sitting');
const sittingBtn = document.querySelector('.list');
const rightSideBar = document.querySelector('.right-lists');
const loginBtn = document.querySelector('.login-btn');

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
    console.log(list);
    if (list.style.display === 'none') {
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
  });
});
window.onscroll = () => {
  if (window.scrollY >= 355) {
    rightSideBar.style.position = 'fixed';
    rightSideBar.style.top = '64px';
  } else {
    rightSideBar.style.position = 'absolute';
    rightSideBar.style.top = '400px';
  }
};

loginBtn.addEventListener('click', () => {
  window.location.href = '../../public/html/login.html';
});
