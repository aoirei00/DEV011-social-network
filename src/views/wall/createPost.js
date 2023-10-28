function createPost() {
  const containerCreatePost = document.createElement('div');
  const containerInputPost = document.createElement('div');
  const inputCreatePost = document.createElement('input');
  const containerImg = document.createElement('div');
  const imgUserCreatePost = document.createElement('img');
  const sectionPost = document.createElement('section');

  containerCreatePost.classList.add('containerCreatePost');
  containerInputPost.classList.add('containerInput-post');
  inputCreatePost.classList.add('inputCreate-post');
  containerImg.classList.add('containerImgUser-post');
  imgUserCreatePost.classList.add('imgUserCreate-post');
  sectionPost.classList.add('section-post');

  imgUserCreatePost.src = './img-sn/user.jpg';

  containerImg.append(imgUserCreatePost);
  containerInputPost.append(containerImg, inputCreatePost);
  containerCreatePost.append(containerInputPost);

  return containerCreatePost;
}
export default createPost;
