let postTitle = '';

const titleInputNode = document.querySelector('.js-title-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');

newPostBtnNode.addEventListener('click', function() {
    postTitle = titleInputNode.value;

    postsNode.innerText = postTitle;
});
