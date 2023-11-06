import { onSnapshot, serverTimestamp } from 'firebase/firestore';
import {
  db, collection, addDoc, getDocs, orderBy, query,
} from './firestore';
​
const postCollection = collection(db, 'post');
​
export const createPostFirestore = (comment) => {
  addDoc(postCollection, {
    comment,
    date: serverTimestamp(),
  });
};
​
export const querySnapshot = getDocs(postCollection);
​
const q = query(postCollection, orderBy('date', 'asc'));
​
export const paintRealTime = (callBack) => onSnapshot(q, callBack);