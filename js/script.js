const posts = [];

const TITLE_VALIDATION_LIMIT = 15;
const TEXT_VALIDATION_LIMIT = 40;

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validatonMassage = document.querySelector('.validationMessage');


newPostBtnNode.addEventListener('click', function() { // обработка при клики
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();
    if (posts.length === 0) {
    postsNode.innerHTML = 'Пока пусто...';
    return;
}
});
postTitleInputNode.addEventListener('input',validation);
postTextInputNode.addEventListener('input',validation);

function validation() { // ограничение поста
    const titleLen = postTitleInputNode.value.length;
    const textLen = postTextInputNode.value.length;

    if (titleLen > TITLE_VALIDATION_LIMIT) {
        validatonMassage.innerText = `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
        validatonMassage.classList.remove('validationMessege_hidden');
        return;
    }

    if (textLen > TEXT_VALIDATION_LIMIT) {
        validatonMassage.innerText = `Длина текса не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
        validatonMassage.classList.remove('validationMessege_hidden');
        return;
    }

    validatonMassage.classList.add(`validationMessege_hidden`);
}
function getPostFromUser() { // возвращает пост
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;
    
    return {
        title: title,
        text: text,
    }
}
function addPost({title, text}) { // сохраняет пост
    const carrentDate = new Date();
    const dt = `${carrentDate.getHours()} : ${carrentDate.getMinutes()}`;

    posts.push({
        dt: dt,
        title: title,
        text: text,
    });
}
function getPosts() {
    return posts;
}
function renderPosts() { // отображает пост
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
            <div class= post>
                <p class='post__date'>${post.dt}</p>
                <p class='post__title'>${post.title}</p>
                <p class= 'post__text'>${post.text}</p>
            </div>`
    });

    postsNode.innerHTML = postsHTML;
}