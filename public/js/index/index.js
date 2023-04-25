const loginSignupBtn = document.querySelector('.last');

loginSignupBtn.addEventListener('click', () => {
  window.location.href = '/page/login';
});

setTimeout(() => {
  const usernames = document.querySelectorAll('.in-user p');
  usernames.forEach((user) => {
    user.addEventListener('click', () => {
      window.location.href = `/page/profile/${user.id}`;
    });
  });
}, 100);
