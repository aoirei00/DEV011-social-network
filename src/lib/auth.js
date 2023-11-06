import {
  auth, signInWithEmailAndPassword, provider, signInWithPopup, createUserWithEmailAndPassword,
} from './firebase.js';

export const loginEmailPassword = (email, password) => {
  console.log(email, password);
  return signInWithEmailAndPassword(auth, email, password);
};
export const loginPopUp = () => {
  console.log('pop up');
  return signInWithPopup(auth, provider);
};

export const createEmailPassword = (email, password) => {
  console.log('email password');
  return createUserWithEmailAndPassword(auth, email, password);
};
