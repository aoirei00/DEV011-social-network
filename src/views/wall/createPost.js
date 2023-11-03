export const createPost = () => {
  const containerCreatePost = document.createElement('div');
  const containerInputPost = document.createElement('div');
  const txtAreaCreatePost = document.createElement('textarea');
  const containerImg = document.createElement('div');
  const circleImg = document.createElement('div');
  const imgUserCreatePost = document.createElement('img');
  const sectionPost = document.createElement('section');
  const btnPost = document.createElement('button');

  containerCreatePost.classList.add('containerCreatePost');
  containerInputPost.classList.add('containerTxtArea-post');
  txtAreaCreatePost.classList.add('txtAreaCreate-post');
  txtAreaCreatePost.placeholder = 'Pon tu texto aquí... ♫';
  containerImg.classList.add('containerImgUser-post');
  circleImg.classList.add('circle-img');
  imgUserCreatePost.classList.add('imgUserCreate-post');
  sectionPost.classList.add('section-post');
  btnPost.classList.add('btnPost');

  imgUserCreatePost.src = './img-sn/user.jpg';
  btnPost.textContent = 'Post';
  
  txtAreaCreatePost.id = 'inputPost';
  btnPost.id = 'btnPost';

  containerImg.append(circleImg);
  circleImg.append(imgUserCreatePost);
  containerInputPost.append(containerImg, txtAreaCreatePost);
  containerCreatePost.append(containerInputPost, btnPost);
  //console.log(containerCreatePost)

  containerCreatePost.querySelector('#btnPost').addEventListener('click', () => {
    const contentPost = containerCreatePost.querySelector('#inputPost').value;
    console.log('funcion click', contentPost);
  });

  return containerCreatePost;
}
export default createPost;
