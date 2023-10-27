function post(navigateTo) {
  const containerPost = document.createElement('div');
  const headPost = document.createElement('div');
  const imgUserHeadPost = document.createElement('img');
  const titleNameUser = document.createElement('h2');
  const btnOptionsPost = document.createElement('button');
  const bodyPost = document.createElement('div');
  const likePost = document.createElement('div');

  containerPost.classList.add('container-post');
  headPost.classList.add('head-post');
  imgUserHeadPost.classList.add('imgUse-post');
  titleNameUser.classList.add('nameUser-post');
  btnOptionsPost.classList.add('btnOptions-post');
  bodyPost.classList.add('body-post');
  likePost.classList.add('like-post');
}

export default post;
