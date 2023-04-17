const container = document.getElementById('container');
fetch('/post/get', {
  method: 'GET',
}).then((data) => data.json())
  .then(console.log)
  .catch(console.log);
