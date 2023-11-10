import {
  db, collection, addDoc, getDocs, orderBy, query, onSnapshot, serverTimestamp, doc, deleteDoc,
} from './firestore';

const postCollection = collection(db, 'post');

export const createPostFirestore = (comment) => {
  addDoc(postCollection, {
    comment,
    date: serverTimestamp(),
  });
};

export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));
export const paintRealTime = (callBack) => onSnapshot(q, callBack);

export const deletePost = (id) => deleteDoc(doc(db, 'post', id));
