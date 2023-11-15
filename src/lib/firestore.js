import {
  getFirestore, addDoc, collection, getDocs, onSnapshot, orderBy, query, doc,
  serverTimestamp, deleteDoc, updateDoc, setDoc, arrayUnion, arrayRemove,
} from 'firebase/firestore';
import { app } from '../config/firebaseConfig.js';

export const db = getFirestore(app);

export {
  getFirestore, addDoc, collection, getDocs, onSnapshot, orderBy, query, doc,
  serverTimestamp, deleteDoc, updateDoc, setDoc, arrayUnion, arrayRemove,
};
