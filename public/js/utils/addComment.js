/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const postsContainer = document.getElementById('container');
const addComment = (content, postId) => {
  fetch(`/post/comment/${postId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content,
      postId,
    }),
  }).then((data) => data.json())
    .then((comment) => {
      if (comment.error) {
        if (comment.data.message === 'UnAuthorize') {
          window.location.href = '/page/login';
        }
      }
      const thePost = document.getElementById(`postInfo${postId}`);
      const Container = document.getElementById(`container${postId}`);
      const commentDiv = createElement('div', 'comment-div');
      Container.appendChild(commentDiv);
      const userComment = createElement('div', 'user-comment');
      commentDiv.appendChild(userComment);
      const commentImg = createElement('img', 'comment');
      commentImg.src = '/image/reddit.png';
      const usernameComment = createElement('p', 'username-comment');
      usernameComment.textContent = comment.username;
      const commentDate = createElement('p', 'comment-date');
      commentDate.textContent = comment.comment.date;
      userComment.appendChild(commentImg);
      userComment.appendChild(usernameComment);
      userComment.appendChild(commentDate);
      const commentContent = createElement('div', 'comment-content');
      commentDiv.appendChild(commentContent);
      const commentText = createElement('p', 'comment-text');
      commentContent.appendChild(commentText);
      commentText.textContent = comment.comment.content;
      const commentButtons = createElement('div', 'comment-buttons');
      commentDiv.appendChild(commentButtons);
      const commentVote = createElement('div', 'comment-vote');
      commentButtons.appendChild(commentVote);
      const commentUp = createElement('button', 'comment-up');
      const commentUpIcon = document.createElement('i');
      commentUpIcon.className = 'fa-solid fa-arrow-up';
      commentUp.appendChild(commentUpIcon);
      commentVote.appendChild(commentUp);
      const commentNum = createElement('span', 'comment-num');
      commentNum.textContent = 0;
      commentVote.appendChild(commentNum);
      const commentDown = createElement('button', 'comment-down');
      const commentDownIcon = document.createElement('i');
      commentDownIcon.className = 'fa-solid fa-arrow-down';
      commentDown.appendChild(commentDownIcon);
      commentVote.appendChild(commentDown);
      const reply = createElement('button', 'reply');
      const replyIcon = createElement('i', 'ri-chat-smile-line');
      reply.appendChild(replyIcon);
      commentButtons.appendChild(reply);
      const share = createElement('button', 'share');
      commentButtons.appendChild(share);
      const commentMore = createElement('button', 'comment-more');
      commentMore.textContent = '...';
      commentButtons.appendChild(commentMore);
      thePost.appendChild(Container);
    })
    .catch(console.log);
};

// eslint-disable-next-line no-unused-vars
const addCommentValidation = (content, postId) => {
  if (content.length < 1) { return 'Comment must be three characters at least.'; }
  if (content.length > 250) { return 'Comment must be three characters at least.'; }
  return addComment(content, postId);
};
