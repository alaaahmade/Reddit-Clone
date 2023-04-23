// eslint-disable-next-line no-unused-vars
const userData = () => fetch('/user/data')
  .then((data) => data.json())
  .catch(console.log);

userData()
  .then((data) => {
    const loginBtn = document.querySelector('.login-btn');
    const getAppBtn = document.querySelector('.get-app');
    const myButtons = document.querySelectorAll('.none');
    const loginLogout = document.getElementById('login-logout');
    if (data.data) {
      if (data.data.message && data.data.message === 'UnAuthorize') {
        myButtons.forEach((btn) => {
        // eslint-disable-next-line no-param-reassign
          btn.style.display = 'none';
        });
        const one = document.querySelector('.one');
        one.style.display = 'none';
      }
    } else {
      myButtons.forEach((btn) => {
        // eslint-disable-next-line no-param-reassign
        btn.style.display = 'block';
      });
      if (loginBtn && getAppBtn) {
        loginBtn.style.display = 'none';
        getAppBtn.style.display = 'none';
      }
      const tow = document.querySelector('.tow');
      if (tow) {
        tow.style.display = 'none';
        loginLogout.textContent = 'Logout';
      }
      const headerUserName = document.getElementById('username');
      const userNode = document.createTextNode(data.user.username);
      headerUserName.appendChild(userNode);
    }
  });
