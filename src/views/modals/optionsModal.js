// import
function modalEditDelete() {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Modal content
  const editButton = document.createElement('button');
  editButton.classList.add('btnEdit');
  editButton.textContent = 'Edit post';
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btnDelete');
  deleteButton.textContent = 'Delete post';
  const closeButton = document.createElement('button');
  closeButton.id = 'close';
  closeButton.textContent = 'X';

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.appendChild(closeButton);
  modal.appendChild(editButton);
  modal.appendChild(deleteButton);

  return modal;
}
export default modalEditDelete;

// function modalEditDelete() {
//   console.log('modal1');
//   //   const modal = document.createElement('section');
//   const modalContainer = document.createElement('div');
//   const buttonEdit = document.createElement('button');
//   const buttoDetele = document.createElement('button');
//   const buttonClose = document.createElement('a');
//   // classModalEditDelete
//   //   modal.classList.add('modal');
//   modalContainer.classList.add('modalCont');
//   buttonEdit.classList.add('btnEdit');
//   buttoDetele.classList.add('btnDelete');
//   buttonClose.classList.add('btnClose');

//   // modalContent
//   buttonEdit.textContent = 'Edit post';
//   buttoDetele.textContent = 'Delete post';
//   buttonClose.textContent = 'x';
//   buttonClose.addEventListener('click', () => {
//     ('/muro');
//   });

//   modalContainer.append(buttonClose, buttonEdit, buttoDetele);
//   console.log('modal fin');
//   return modalContainer;
// }
// export default modalEditDelete;
