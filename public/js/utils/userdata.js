// eslint-disable-next-line no-unused-vars
const userData = () => fetch('/user/data')
  .then((data) => data.json())
  .catch(console.log);

userData()
  .then((data) => {
    const headerUserName = document.getElementById('username');
    const userNode = document.createTextNode(data.user.username);
    headerUserName.appendChild(userNode);
  });

// console.log(headerUserName);
// const commentUserName = document.querySelector('.user-span');
// commentUserName.appendChild(userNode);
