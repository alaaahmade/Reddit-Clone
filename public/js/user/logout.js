const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
  fetch('/user/logout', {
    method: 'GET',
  })
    . then(() => {
      window.location.href = '/page/index';
    })
    // eslint-disable-next-line no-alert
    .catch((error) => window.alert(error.message));
});
