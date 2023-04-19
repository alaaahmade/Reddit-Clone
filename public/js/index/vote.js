const getVote = (id) => fetch(`/vote/get/index/${id}`)
  .then((data) => data.json());

setTimeout(() => {
  const upBtn = document.querySelectorAll('button.score-up');
  upBtn.forEach((btn) => {
    const score = btn.nextElementSibling;
    getVote(btn.id)
      .then((data) => {
        score.textContent = data.score;
        if (data.class === '#FF4500') {
          // eslint-disable-next-line no-param-reassign
          btn.style.color = data.class;
          score.style.color = data.class;
        } else if (data.class === '#ccc') {
          score.style.color = data.class;
          score.nextElementSibling.style.color = data.class;
        }
      });
  });
}, 200);
