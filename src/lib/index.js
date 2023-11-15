import {
  db, collection, addDoc, getDocs, orderBy, query, onSnapshot, serverTimestamp, doc, deleteDoc,
  updateDoc, arrayUnion, arrayRemove, getFirestore,
} from './firestore';

const postCollection = collection(db, 'post');

export const createPostFirestore = (comment) => {
  addDoc(postCollection, {
    comment,
    date: serverTimestamp(),
    likes: [],
  });
};

//  export await updateDoc(postCollection, {
//   comment,
// });

export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));
export const paintRealTime = (callBack) => onSnapshot(q, callBack);

export const deletePost = (id) => deleteDoc(doc(db, 'post', id));

export const updatePost = async (id, newData) => {
  try {
    const postRef = doc(db, 'post', id);
    await updateDoc(postRef, newData);
    console.log('Post actualizado con éxito');
  } catch (error) {
    console.error('Error al actualizar el post:', error);
  }
};
////////////////////////////funcion de agregar like/////////////////////////////////////
export const contadorLikes = (postId, userId) => {
  try {
    const db = getFirestore();
    const postRef = doc(db, 'post', postId);

    // Actualiza el campo "likes" en Firestore utilizando arrayUnion
    updateDoc(postRef, {
      likes: arrayUnion(userId),
    });

    console.log(`Se dio like al post ${postId}`);
  } catch (error) {
    console.error('Error al actualizar los likes:', error);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////