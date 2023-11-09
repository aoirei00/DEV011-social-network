// import modalEditDelete from './optionsModal';

function post(data) {
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

  containerPost.classList.add('container-post');
  containerPost.dataset.id = post.id; // this newwww
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

  imgUserHeadPost.src = './img-sn/user.jpg';
  textAreaPost.textContent = data.comment; // aqui mandamos la informacion del input o text area
  titleNameUser.textContent = 'user01';
  contadorLike.textContent = '100';
  // tituloLike.textContent = data.date;

  cardPost.id = cardPost;
  textAreaPost.id = 'textAreaPost-txt';

  // MODALANTERIOR
  // const modal = document.createElement('section');
  // btnOptionsPost.addEventListener('click', () => {
  //   // console.log('aparece');
  //   const moreOptions = modalEditDelete();
  //   // console.log('ay');
  //   modal.append(moreOptions);
  //   modal.style.display = 'block';
  //   // return modal;
  // });

  containerUserPost.append(imgUserHeadPost, titleNameUser);
  // modalContainer.append(buttonEdit, buttoDetele, buttonClose);
  // modal.append(moreOptions);
  headPost.append(containerUserPost, btnOptionsPost);
  cardPost.append(textAreaPost);
  likePost.append(like, contadorLike, tituloLike);
  // document.body.appendChild(modal);
  containerPost.append(headPost, cardPost, likePost);

  return containerPost;
}

export default post;
