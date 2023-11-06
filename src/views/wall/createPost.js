import { doc } from 'firebase/firestore';
import { createPostFirestore } from '../../lib/index';

export const createPost = () => {
  const containerPost = document.createElement('div');
  const headPost = document.createElement('div');
  const containerUserPost = document.createElement('div');
  const imgUserHeadPost = document.createElement('img');
  const titleNameUser = document.createElement('h2');
  const btnOptionsPost = document.createElement('button');
  const cardPost = document.createElement('div');
  const textAreaPost = document.createElement('textarea');
  const likePost = document.createElement('div');
  const like = document.createElement('button');
  const contadorLike = document.createElement('h1');
  const tituloLike = document.createElement('h1');
  
  containerPost.classList.add('container-post');
  headPost.classList.add('head-post');
  containerUserPost.classList.add('containerUser-post');
  imgUserHeadPost.classList.add('ImgUser-post');
  titleNameUser.classList add('nameUser-post');
  btnOptionsPost.classList.add('btnOptions-post');
  cardPost.classList.add('card-post');
  textAreaPost.classList.add('txtArea-post');
  likePost.classList.add('like-post');
  like.classList.add('btnLike-post');
  contadorLike.classList.add('contadorLike-post');
  tituloLike.classList.add('tituloLike-post');
  cardPost.id = cardPost;
  
  // Consulta Firestore con orden ascendente por fecha
  paintRealTime((querySnapshot) => {
    cardPost.textContent = '';
    querySnapshot.forEach((doc) => {
      const textAreaPost = document.createElement('input');
      textAreaPost.value = doc.data().comment;
      cardPost.appendChild(textAreaPost);
    });
  });

  imgUserHeadPost.src = './img-sn/user.jpg';
  titleNameUser.textContent = 'user01';
  contadorLike.textContent = '100';
  tituloLike.textContent = 'Me gusta';

  containerUserPost.append(imgUserHeadPost, titleNameUser);
  headPost.append(containerUserPost, btnOptionsPost);
  cardPost.append(textAreaPost);
  likePost.append(like, contadorLike, tituloLike);
  containerPost.append(headPost, cardPost, likePost);
  
  return containerPost;
}

export default createPost;