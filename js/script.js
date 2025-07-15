let postTitle = '';

const titleInputNode = document.querySelector('.js-title-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn')

newPostBtnNode.addEventListener('click', function() {
    postTitle = titleInputNode.value

    console.log(postTitle);
})