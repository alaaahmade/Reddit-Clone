/* eslint-disable no-unused-vars */
const setting = document.querySelector('.sitting');
const sittingBtn = document.querySelector('.list');

const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const myProfileBtn = document.getElementById('myprofile');
if (myProfileBtn) {
  myProfileBtn.addEventListener('click', () => {
    window.location.href = '/page/myProfile';
  });
}

sittingBtn.addEventListener('click', () => {
  if (setting.style.display === 'none') {
    setting.style.display = 'block';
  } else {
    setting.style.display = 'none';
  }
});
