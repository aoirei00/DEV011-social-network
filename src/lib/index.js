import {
  db, collection, addDoc, getDocs, orderBy, query, onSnapshot, serverTimestamp, doc, deleteDoc,
  updateDoc, arrayUnion, getFirestore, getDoc, arrayRemove,
} from './firestore';

const postCollection = collection(db, 'post');
const usersCollection = collection(db, 'users');
export const createPostFirestore = (comment, userId, name) => {
  addDoc(postCollection, {
    comment,
    date: serverTimestamp(),
    likes: [],
    userId,
    name,
  });
};

export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));
export const querySnapshotUsers = getDocs(usersCollection);

export const paintRealTime = (callBack) => onSnapshot(q, callBack);
/// // hace  una consulta a la bd en tiempo real
export const usersRealTime = (callBack) => onSnapshot(usersCollection, callBack);

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
export const setLikes = async (postId, userId) => {
  try {
    const bd = getFirestore();
    const postRef = doc(bd, 'post', postId);
    // Actualiza el campo "likes" en Firestore utilizando arrayUnion
    // if (postRef.) {
    // }
    const getDocuement = await getDoc(postRef);
    console.log(getDocuement.data().likes);
    if (getDocuement.data().likes.includes(userId)) {
      console.log('deberria entrar cuando ya este el like');
      //const newArr = getDocuement.data().likes.filter((like) => like !== userId);
      updateDoc(postRef, {
        likes: arrayRemove(userId),
      });
    } else {
      console.log('entra al like eeeeeeeeeeeeeeeeeeeeeeeeeeeee');
      updateDoc(postRef, {
        likes: arrayUnion(userId),
      });
    }
    console.log(`Se dio like al post ${postId}`);
    console.log(`usuario ${userId}`);
  } catch (error) {
    console.error('Error al actualizar los likes:', error);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////