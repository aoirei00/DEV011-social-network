import { serverTimestamp } from 'firebase/firestore';
import { addDoc, collection, db, getDocs } from './firestore';

export const createPostFirestore = (comment) => {
  addDoc(collection(db, 'post'), {
    comment,
    date: serverTimestamp(),
  });
};

export const querySnapshot = getDocs(collection(db, 'post'));
