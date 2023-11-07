import {
  getAuth,
  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword,
} from 'firebase/auth';

import { app } from '../config/firebaseConfig';

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export {
  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword,
};
