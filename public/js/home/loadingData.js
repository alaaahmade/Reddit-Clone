const container = document.getElementById('container');
fetch('/post/get', {
  method: 'GET',
}).then(console.log)
  .catch(console.log);
