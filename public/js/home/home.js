/* eslint-disable no-alert */
const rightSideBarBtn = document.querySelectorAll('#right-sid-bar-btn');
const sideBarBtn = document.querySelectorAll('#sid-bar-btn');
const setting = document.querySelector('.sitting');
const sittingBtn = document.querySelector('.list');
const rightSideBar = document.querySelector('.right-lists');
const postInput = document.getElementById('postInput');

setTimeout(() => {
  const usernames = document.querySelectorAll('.in-user p');
  usernames.forEach((user) => {
    user.addEventListener('click', () => {
      window.location.href = `/page/profile/${user.id}`;
    });
  });
  const postMore = document.querySelectorAll('.fa-ellipsis');
  postMore.forEach((more) => {
    more.addEventListener('click', () => {
      fetch('/user/data')
        .then((data) => data.json())
        .then((data) => data.user.id)
        .then((data) => {
          const userId = more.getAttribute('userid');
          if (data === +userId) {
            const deleteBtn = document.querySelectorAll('.deleteBtn');
            const myDeleteBtn = Array.from(deleteBtn).filter((e) => e.id === more.id)[0];
            myDeleteBtn.style.display = 'block';
            myDeleteBtn.style.marginBottom = '5px';
            const edit = document.querySelectorAll('.editBtn');
            const myEdit = Array.from(edit).filter((e) => e.id === more.id)[0];
            myEdit.style.display = 'block';
            // eslint-disable-next-line no-param-reassign
            more.style.display = 'none';
            myEdit.addEventListener('click', () => {
              const postTitle = document.querySelectorAll('.content p.title');
              const postContent = document.querySelectorAll('.content .post-disc');
              const postImg = document.querySelectorAll('.post-img');
              const myPostTitle = Array.from(postTitle).filter((e) => e.id === more.id)[0];
              const myPostContent = Array.from(postContent).filter((e) => e.id === more.id)[0];
              const myPosteImg = Array.from(postImg).filter((e) => e.id === more.id)[0];
              const postData = {
                id: more.id,
                title: myPostTitle.textContent,
                content: myPostContent.textContent,
                img: myPosteImg.src,
              };
              localStorage.setItem('postData', JSON.stringify(postData));
              window.location.href = '/page/createpost';
            });
            myDeleteBtn.addEventListener('click', () => {
              fetch(`/post/delete/${myDeleteBtn.id}`)
                .then((result) => result.json())
                .then((result) => {
                  if (!result.error) {
                    window.location.reload();
                  }
                }).catch(() => window.alert('something is wrong'));
            });
          }
        })
        .catch(() => window.alert('This user dos not exist.'));
    });
  });
}, 200);

postInput.addEventListener('focus', () => {
  window.location.href = '/page/createpost';
});

sittingBtn.addEventListener('click', () => {
  if (setting.style.display === 'none') {
    setting.style.display = 'block';
  } else {
    setting.style.display = 'none';
  }
});

sideBarBtn.forEach((btn) => {
  const classN = btn.classList[0];
  const list = document.querySelector(`div.${classN}`);
  btn.addEventListener('click', () => {
    if (list.style.display === 'none') {
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
  });
});
rightSideBarBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const classN = btn.classList[0];
    const list = document.querySelector(`div.right-${classN}`);
    if (list.style.display === 'none') {
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
  });
});
window.onscroll = () => {
  if (window.scrollY >= 355) {
    rightSideBar.style.position = 'fixed';
    rightSideBar.style.top = '64px';
  } else {
    rightSideBar.style.position = 'absolute';
    rightSideBar.style.top = '400px';
  }
};
const myProfileBtn = document.getElementById('myprofile');

myProfileBtn.addEventListener('click', () => {
  window.location.href = '/page/myProfile';
});
