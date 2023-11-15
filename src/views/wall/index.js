/* eslint-disable no-use-before-define */
import head from './head.js';
import { createPost } from './createPost.js';
import post from './post.js';
import footer from './footer.js';
import modalConfirmationDelete from '../modals/modalConfirmationDelete.js';
import modalEdit from '../modals/modalEdit.js';

import {
  deletePost, paintRealTime, updatePost, createPostFirestore,
} from '../../lib/index';

function muro(navigateTo) {
  const sectionWall = document.createElement('section');
  sectionWall.classList.add('section-wall');
  const headComponents = head(navigateTo);
  const content = document.createElement('section');
  content.classList.add('contentWall');
  const createPostComponents = createPost();
  const footerComponents = footer(navigateTo);
  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');
  sectionPost.style.marginBottom = '80px';

  /// /////////////////////////////////

  createPostComponents.querySelector('.button-publish').addEventListener('click', () => {
    const txtArea = createPostComponents.querySelector('.txtAreaCreate-post');
    const comment = txtArea.value;

    if (comment === '') {
      alert('no hay datos u.u');
    } else {
      createPostFirestore(comment);
    }
    txtArea.value = '';
  });

  paintRealTime((querySnapshot) => {
    sectionPost.textContent = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      const postComponents = post(data, id);
      sectionPost.append(postComponents);
    });
    const btnsDelete = sectionPost.querySelectorAll('.btn-delete');
    const btnsEdit = sectionPost.querySelectorAll('.btn-edit');
    // const btnsLike = sectionPost.querySelectorAll('.btnLike-post');

    openModal(btnsDelete);
    openModalEdit(btnsEdit);
  });

  // let contador = 0;

  // function contadorLike(btnsLike) {
  //   btnsLike.forEach(btns)
  // }

  function openModal(btnsDelete) {
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', () => {
        const dataId = btn.dataset.id;
        console.log(dataId);
        const modalDelete = modalConfirmationDelete();

        document.body.appendChild(modalDelete);
        console.log(modalDelete);
        const btnConfirmDelete = modalDelete.querySelector('.btnConfirm-delete');
        const btnConfirmCancel = modalDelete.querySelector('.btnConfirm-cancel');

        btnConfirmDelete.addEventListener('click', () => {
          console.log('Acción de eliminación confirmada');
          modalDelete.setAttribute('style', 'display: none;');
          deletePost(dataId);
        });

        btnConfirmCancel.addEventListener('click', () => {
          console.log('Acción de cancelación confirmada');
          modalDelete.style.display = 'none';
        });
      });
    });
  }

  function openModalEdit(btnsEdit) {
    btnsEdit.forEach((elemento) => {
      elemento.addEventListener('click', () => {
        const dataId = elemento.dataset.id;
        const ccomment = elemento.dataset.comment;
        console.log('si entro');
        console.log(ccomment);
        console.log(dataId);
        const modalEditPost = modalEdit(ccomment);
        document.body.appendChild(modalEditPost);
        // console.log(modalEditPost);
        const btnSavePostEdit = modalEditPost.querySelector('.btnSavePost-edit');
        const btnCancel = modalEditPost.querySelector('.btn-cancel');

        btnSavePostEdit.addEventListener('click', async () => {
          console.log('Acción de guardado de cambios confirmada');
          modalEditPost.style.display = 'none';
          // Obtener el nuevo comentario desde la ventana modal
          const newComment = modalEditPost.querySelector('.txtArea-post').value;
          console.log(newComment);
          // Actualizar el post en la base de datos
          await updatePost(dataId, { comment: newComment });
        });

        btnCancel.addEventListener('click', () => {
          console.log('Acción de cancelación confirmada');
          modalEditPost.style.display = 'none';
        });
      });
    });
  }

  content.append(createPostComponents, sectionPost);
  sectionWall.append(headComponents, content, footerComponents);

  return sectionWall;
}

export default muro;