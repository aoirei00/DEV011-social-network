function post(data, id) {
  const containerPost = document.createElement('div');
  const headPost = document.createElement('div');
  const containerUserPost = document.createElement('div');
  const imgUserHeadPost = document.createElement('img');
  // const circleImgPost = document.createElement('div');
  const titleNameUser = document.createElement('h2');
  const btnOptionsPost = document.createElement('button');
  const cardPost = document.createElement('div');
  const textAreaPost = document.createElement('textarea');
  const likePost = document.createElement('div');
  const like = document.createElement('button');
  const contadorLike = document.createElement('h1');
  const tituloLike = document.createElement('h1');

  /// ///// para probar ///////////////////
  const btnDelete = document.createElement('button');
  const btnEdit = document.createElement('button');

  containerPost.classList.add('container-post');
  headPost.classList.add('head-post');
  containerUserPost.classList.add('containerUser-post');
  imgUserHeadPost.classList.add('ImgUser-post');
  // circleImgPost.classList.add('circle-img');
  titleNameUser.classList.add('nameUser-post');
  btnOptionsPost.classList.add('btnOptions-post');
  cardPost.classList.add('card-post');
  textAreaPost.classList.add('txtArea-post');
  likePost.classList.add('like-post');
  like.classList.add('btnLike-post');
  contadorLike.classList.add('contadorLike-post');
  tituloLike.classList.add('tituloLike-post');

  btnDelete.classList.add('btn-delete');
  btnEdit.classList.add('btn-edit');

  btnDelete.textContent = 'Delete';
  btnDelete.setAttribute('data-id', id);
  btnEdit.textContent = 'Edit';

  imgUserHeadPost.src = './img-sn/user.jpg';
  textAreaPost.textContent = data.comment; // aqui mandamos la informacion del input o text area
  titleNameUser.textContent = 'user01';
  contadorLike.textContent = '100';
  tituloLike.textContent = 'comentarios';

  cardPost.id = cardPost;
  textAreaPost.id = 'textAreaPost-id';

  containerUserPost.append(imgUserHeadPost, titleNameUser);
  headPost.append(containerUserPost, btnOptionsPost);
  cardPost.append(textAreaPost);
  likePost.append(like, contadorLike, tituloLike, btnDelete, btnEdit);
  containerPost.append(headPost, cardPost, likePost);
  return containerPost;
}
export default post;
