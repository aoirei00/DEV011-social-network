// archivo createpost.js
import { doc } from 'firebase/firestore';
import { createPostFirestore } from '../../lib/index';

function createPost() {
  const containerCreatePost = document.createElement('div');
  const containerInputPost = document.createElement('div');
  const txtAreaCreatePost = document.createElement('input');
  const buttonPublish = document.createElement('button');
  const containerImg = document.createElement('div');
  const circleImg = document.createElement('div');
  const imgUserCreatePost = document.createElement('img');
  const sectionPost = document.createElement('section');
  // classaddition
  containerCreatePost.classList.add('containerCreatePost');
  containerInputPost.classList.add('containerTxtArea-post');
  txtAreaCreatePost.classList.add('txtAreaCreate-post');
  txtAreaCreatePost.placeholder = 'Pon tu texto aquí... ♫';
  buttonPublish.classList.add('button-publish');
  containerImg.classList.add('containerImgUser-post');
  circleImg.classList.add('circle-img');
  imgUserCreatePost.classList.add('imgUserCreate-post');
  sectionPost.classList.add('section-post');
  // additionextra
  imgUserCreatePost.src = './img-sn/user.jpg';
  buttonPublish.id = 'buttonPublish';
  txtAreaCreatePost.id = 'txtAreaCreatePost';
  buttonPublish.textContent = 'Publish';
  buttonPublish.addEventListener('click', () => {
    const comment = txtAreaCreatePost.value; // Usar txtAreaCreatePost directamente
    console.log('Funciona el click', comment);
    createPostFirestore(comment);
    txtAreaCreatePost.value = '';
  });
  containerImg.append(circleImg);
  circleImg.append(imgUserCreatePost);
  containerInputPost.append(containerImg, txtAreaCreatePost, buttonPublish);
  containerCreatePost.append(containerInputPost);
  return containerCreatePost;
}
export default createPost;
