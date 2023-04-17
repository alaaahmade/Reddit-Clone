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
    const upIcon = document.createElement('i');
    upIcon.className = 'fa-solid fa-arrow-up';
    scoreUP.appendChild(upIcon);
    score.appendChild(scoreUP);
    const scoreNum = createElement('span', 'score-num');
    scoreNum.textContent = 0;
    score.appendChild(scoreNum);
    const scoreDown = createElement('button', 'score-down');
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
    username.setAttribute('userId', element.userid);
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
  });
};
