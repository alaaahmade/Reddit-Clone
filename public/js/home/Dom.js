/* eslint-disable no-unused-vars */
const postsContainer = document.getElementById('container');

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const createPost = (Data) => {
  postsContainer.textContent = '';
  Data.forEach((element) => {
    const post = createElement('div', 'post');

    const score = createElement('div', 'score');
    post.appendChild(score);
    const scoreUP = createElement('button', 'score-up');
    scoreUP.id = element.id;
    const upIcon = document.createElement('i');
    upIcon.className = 'fa-solid fa-arrow-up';
    scoreUP.appendChild(upIcon);
    score.appendChild(scoreUP);
    const scoreNum = createElement('span', 'score-num');
    scoreNum.id = element.id;
    scoreNum.textContent = 0;
    score.appendChild(scoreNum);
    const scoreDown = createElement('button', 'score-down');
    scoreDown.id = element.id;
    const downIco = document.createElement('i');
    downIco.className = 'fa-solid fa-arrow-down';
    scoreDown.appendChild(downIco);
    score.appendChild(scoreDown);
    const postInfo = createElement('div', 'post-info');
    post.appendChild(postInfo);
    const userInfo = createElement('div', 'user-info');
    postInfo.appendChild(userInfo);
    const user = createElement('div', 'user');
    userInfo.appendChild(user);
    const inUser = createElement('div', 'in-user');
    user.appendChild(inUser);
    const userIcon = createElement('img', 'user-icon');
    inUser.appendChild(userIcon);
    const username = createElement('p', 'username');
    username.id = element.userid;
    username.textContent = element.username;
    inUser.appendChild(username);
    const date = createElement('div', 'date');
    inUser.appendChild(date);
    date.textContent = 'From';
    const dateNum = createElement('span', 'span-num');
    dateNum.textContent = element.created_at;
    date.appendChild(dateNum);
    const content = createElement('div', 'content');
    postInfo.appendChild(content);
    const title = createElement('p', 'title');
    title.textContent = element.title;
    content.appendChild(title);
    const description = createElement('p', 'post-disc');
    description.textContent = element.content;
    content.appendChild(description);
    const img = createElement('img', 'post-img');
    img.src = element.imageurl;
    content.appendChild(img);
    const buttons = createElement('div', 'buttons');
    postInfo.appendChild(buttons);
    const comments = createElement('button', 'comments');
    comments.id = 'commentsBtn';
    const commentIcon = createElement('i', 'ri-chat-4-line');
    comments.appendChild(commentIcon);
    const comNode = document.createTextNode('Comments');
    comments.appendChild(comNode);
    buttons.appendChild(comments);
    const Share = createElement('button', 'Share');
    const ShareIcon = createElement('i', 'fa-solid fa-share');
    Share.appendChild(ShareIcon);
    const shareNode = document.createTextNode('Share');
    Share.appendChild(shareNode);
    buttons.appendChild(Share);
    const Save = createElement('button', 'Save');
    const SaveIcon = createElement('i', 'fa-regular fa-bookmark');
    Save.appendChild(SaveIcon);
    const saveNode = document.createTextNode('Save');
    Save.appendChild(saveNode);
    buttons.appendChild(Save);
    const more = createElement('button', 'more');
    const moreIcon = createElement('i', 'fa-solid fa-ellipsis');
    more.appendChild(moreIcon);
    buttons.appendChild(more);
    postsContainer.appendChild(post);

    // --------------------------------comments

    const commentsContainer = createElement('div', 'comments-container');
    // eslint-disable-next-line consistent-return
    buttons.addEventListener('click', () => {
      if (commentsContainer.style.display === 'block') {
        // eslint-disable-next-line no-return-assign
        return commentsContainer.style.display = 'none';
      }
      commentsContainer.style.display = 'block';

      const addComment = createElement('div', 'add-comment');
      commentsContainer.appendChild(addComment);
      const CommentTitle = createElement('h4', 'comment-title');
      CommentTitle.textContent = 'Comment As';
      addComment.appendChild(CommentTitle);
      const createComment = createElement('div', 'create-comment');
      const Comment = createElement('input', 'Comment');
      const commentBtn = createElement('button', 'comment-btn');
      commentBtn.textContent = 'Comment';
      createComment.appendChild(Comment);
      createComment.appendChild(commentBtn);
      addComment.appendChild(createComment);

      // ========================

      fetch(`/post/comment/${element.id}`)
        .then((data) => data.json())
        .then((data) => {
          data.forEach((comment) => {
            const commentDiv = createElement('div', 'comment-div');
            commentsContainer.appendChild(commentDiv);
            const userComment = createElement('div', 'user-comment');
            commentDiv.appendChild(userComment);
            const commentImg = createElement('img', 'comment');
            commentImg.src = '/image/reddit.png';
            const usernameComment = createElement('p', 'username-comment');
            usernameComment.textContent = comment.username;
            const commentDate = createElement('p', 'comment-date');
            commentDate.textContent = comment.date;
            userComment.appendChild(commentImg);
            userComment.appendChild(usernameComment);
            userComment.appendChild(commentDate);
            const commentContent = createElement('div', 'comment-content');
            commentDiv.appendChild(commentContent);
            const commentText = createElement('p', 'comment-text');
            commentContent.appendChild(commentText);
            commentText.textContent = comment.content;
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
            postInfo.appendChild(commentsContainer);
          });
        }).catch(console.log);
    });
  });
};
