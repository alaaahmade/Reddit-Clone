setTimeout(() => {
  const usernames = document.querySelectorAll('.in-user p');
  console.log(usernames);
  usernames.forEach((user) => {
    user.addEventListener('click', () => {
      window.location.href = `/page/profile/${user.id}`;
    });
  });
}, 100);
