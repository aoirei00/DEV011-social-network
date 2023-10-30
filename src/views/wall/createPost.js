function createPost() {
  const containerCreatePost = document.createElement('div');
  const containerInputPost = document.createElement('div');
  const txtAreaCreatePost = document.createElement('textarea');
  const containerImg = document.createElement('div');
  const circleImg = document.createElement('div');
  const imgUserCreatePost = document.createElement('img');
  const sectionPost = document.createElement('section');

  containerCreatePost.classList.add('containerCreatePost');
  containerInputPost.classList.add('containerTxtArea-post');
  txtAreaCreatePost.classList.add('txtAreaCreate-post');
  txtAreaCreatePost.placeholder = 'Pon tu texto aquí... ♫';
  containerImg.classList.add('containerImgUser-post');
  circleImg.classList.add('circle-img');
  imgUserCreatePost.classList.add('imgUserCreate-post');
  sectionPost.classList.add('section-post');

  imgUserCreatePost.src = './img-sn/user.jpg';

  containerImg.append(circleImg);
  circleImg.append(imgUserCreatePost);
  containerInputPost.append(containerImg, txtAreaCreatePost);
  containerCreatePost.append(containerInputPost);

  return containerCreatePost;
}
export default createPost;