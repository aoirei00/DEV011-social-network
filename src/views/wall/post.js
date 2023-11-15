// import modalConfirmationDelete from '../modals/modalConfirmationDelete.js';
import { contadorLikes } from '../../lib/index.js';
import { checkAuthStatus } from '../../lib/auth.js';

function post(data, id, userId) {
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

  cardPost.classList.add('card-post');
  textAreaPost.classList.add('txtArea-post');
  textAreaPost.setAttribute('readonly', 'true');
  likePost.classList.add('like-post');
  like.classList.add('btnLike-post');
  contadorLike.classList.add('contadorLike-post');
  tituloLike.classList.add('tituloLike-post');

  imgUserHeadPost.src = './img-sn/user.jpg';

  textAreaPost.textContent = data.comment; // aqui mandamos la informacion del textarea
  titleNameUser.textContent = 'user01';
  contadorLike.textContent = '100';

  cardPost.id = cardPost;
  textAreaPost.id = 'textAreaPost-txt';
/////////////////////////////////////////////////////////////////////////////////////
  // Devuelve una promesa que se resolverá con el userId
  const getUserId = () => new Promise((resolve) => {
    checkAuthStatus((user) => {
      if (user) {
        resolve(user.uid);
      } else {
        resolve(null);
      }
    });
  });

  // Cuando hagas clic en el botón "like"
  like.addEventListener('click', async () => {
    const postId = id;
    const userId = await getUserId(); // Esperar a que se resuelva la promesa

    if (userId) {
      contadorLikes(postId, userId);
    } else {
      console.error('Error: userId no está definido.');
    }
  });
  ///////////////////////////////////////////////////////////////////////////////////////////
  containerUserPost.append(imgUserHeadPost, titleNameUser);
  headPost.append(containerUserPost, btnEdit, btnDelete);
  cardPost.append(textAreaPost);
  likePost.append(like, contadorLike, tituloLike);
  containerPost.append(headPost, cardPost, likePost);

  return containerPost;
}

export default post;
