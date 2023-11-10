function modalConfirmationDelete() {
  const sectionConfirmModal = document.createElement('section');
  const modalContent = document.createElement('div');
  const tituloDelete = document.createElement('h2');
  const btnConfirmDelete = document.createElement('button');
  const btnConfirmCancel = document.createElement('button');

  sectionConfirmModal.classList.add('sectionConfirm-modal');
  modalContent.classList.add('modalContent-delete');
  tituloDelete.classList.add('tituloModal-delete');
  btnConfirmDelete.classList.add('btnConfirm-delete');
  btnConfirmCancel.classList.add('btnConfirm-cancel');

  tituloDelete.textContent = 'Would you like to delete this post?';
  btnConfirmCancel.textContent = 'Cancel';
  btnConfirmDelete.textContent = 'Delete';

  modalContent.append(tituloDelete, btnConfirmCancel, btnConfirmDelete);
  sectionConfirmModal.append(modalContent);

  return sectionConfirmModal;
}
export default modalConfirmationDelete;
