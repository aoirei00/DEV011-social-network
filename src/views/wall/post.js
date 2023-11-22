// import modalConfirmationDelete from '../modals/modalConfirmationDelete.js';
function post(data, id, loggedUser) {
  const containerPost = document.createElement('div');
  const headPost = document.createElement('div');
  const containerUserPost = document.createElement('div');
  const imgUserHeadPost = document.createElement('img');
  // const circleImgPost = document.createElement('div');
  const titleNameUser = document.createElement('h2');
  // const btnOptionsPost = document.createElement('div');
  const btnEdit = document.createElement('button');
  const btnDelete = document.createElement('button');
  const cardPost = document.createElement('div');
  const textAreaPost = document.createElement('textarea');
  const likePost = document.createElement('div');
  const like = document.createElement('button');
  const contadorLike = document.createElement('h1');
  const tituloLike = document.createElement('h1');

  containerPost.classList.add('container-post');
  // containerPost.dataset.id = post.id; // this newwww
  headPost.classList.add('head-post');
  containerUserPost.classList.add('containerUser-post');
  imgUserHeadPost.classList.add('ImgUser-post');
  titleNameUser.classList.add('nameUser-post');
  // buttons
  // btnOptionsPost.classList.add('btnOptions-post');
  btnEdit.classList.add('btn-edit');
  btnEdit.setAttribute('data-id', id);
  btnEdit.setAttribute('data-comment', data.comment);
  btnDelete.classList.add('btn-delete');
  btnDelete.setAttribute('data-id', id);
  like.setAttribute('data-id', id);
  // printLike ? like.classList.add('iconLike-post') : null;

  const idUserPost = data.userId ? data.userId : 0;
  if (loggedUser !== idUserPost) {
    btnEdit.style.display = 'none';
    btnDelete.style.display = 'none';
    // like.classList.add('iconLike-post2');
  }

  const idUserLike = data.likes;
  if (loggedUser !== idUserLike) {
    like.classList.add('iconLike-post');
    like.classList.remove('iconLike-post2'); // Elimina la clase iconLike-post2 si está presente
  } else {
    like.classList.remove('iconLike-post'); // Elimina la clase iconLike-post si está presente
    like.classList.add('iconLike-post2');
  }

  if (!data.likes.length) {
    // console.log('vacio');
    like.classList.add('iconLike-post2');
  }

  cardPost.classList.add('card-post');
  textAreaPost.classList.add('txtArea-post');
  textAreaPost.setAttribute('readonly', 'true');
  likePost.classList.add('like-post');
  like.classList.add('btnLike-post');
  contadorLike.classList.add('contadorLike-post');
  tituloLike.classList.add('tituloLike-post');

  imgUserHeadPost.src = './img-sn/user.jpg';

  textAreaPost.textContent = data.comment; // aqui mandamos la informacion del textarea
  contadorLike.textContent = data.likes ? data.likes.length : 0;
  titleNameUser.textContent = data.name;
  cardPost.id = cardPost;
  textAreaPost.id = 'textAreaPost-txt';

  containerUserPost.append(imgUserHeadPost, titleNameUser);
  headPost.append(containerUserPost, btnEdit, btnDelete);
  cardPost.append(textAreaPost);
  likePost.append(like, contadorLike, tituloLike);
  containerPost.append(headPost, cardPost, likePost);

  return containerPost;
}

export default post;
