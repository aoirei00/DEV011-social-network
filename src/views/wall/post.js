import modalConfirmationDelete from '../modals/modalConfirmationDelete.js';

function post(data) {
  const containerPost = document.createElement('div');
  const headPost = document.createElement('div');
  const containerUserPost = document.createElement('div');
  const imgUserHeadPost = document.createElement('img');
  const titleNameUser = document.createElement('h2');
  // const btnOptionsPost = document.createElement('div');
  const buttonEdit = document.createElement('button');
  const buttonDelete = document.createElement('button');
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
  buttonEdit.classList.add('btnEdit');
  buttonDelete.classList.add('btn-delete');

  cardPost.classList.add('card-post');
  textAreaPost.classList.add('txtArea-post');
  likePost.classList.add('like-post');
  like.classList.add('btnLike-post');
  contadorLike.classList.add('contadorLike-post');
  tituloLike.classList.add('tituloLike-post');

  imgUserHeadPost.src = './img-sn/user.jpg';
  // buttons
  // buttonEdit.src = '../img-sn/Edit.svg';
  // buttonEdit.textContent = 'Edit';
  // buttonDelete.textContent = 'Delete';

  textAreaPost.textContent = data.comment; // aqui mandamos la informacion del textarea
  titleNameUser.textContent = 'user01';
  contadorLike.textContent = '100';
  // tituloLike.textContent = data.date;

  cardPost.id = cardPost;
  textAreaPost.id = 'textAreaPost-txt';

  // MODALANTERIOR
  const btnOptionsPost = document.createElement('section');
  buttonDelete.addEventListener('click', () => {
  // console.log('aparece');
    const moreOptions = modalConfirmationDelete();
    // console.log('ay');
    btnOptionsPost.append(moreOptions);
    btnOptionsPost.style.display = 'block';
  // return modal;
  });

  containerUserPost.append(imgUserHeadPost, titleNameUser);
  // btnOptionsPost.append(buttonEdit, buttoDetele);
  // headPost.append(containerUserPost, btnOptionsPost);
  headPost.append(containerUserPost, buttonEdit, buttonDelete);
  cardPost.append(textAreaPost);
  likePost.append(like, contadorLike, tituloLike);
  document.body.appendChild(btnOptionsPost);
  containerPost.append(headPost, cardPost, likePost);

  return containerPost;
}

export default post;
