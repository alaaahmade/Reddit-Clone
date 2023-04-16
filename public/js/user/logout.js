const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
  fetch('/user/logout', {
    method: 'GET',
  })
    . then(() => {
      window.location.href = '/page/index';
    })
    .catch(console.log);
});
