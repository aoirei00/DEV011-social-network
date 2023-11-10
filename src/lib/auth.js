import {
  auth, signInWithEmailAndPassword, provider, signInWithPopup, createUserWithEmailAndPassword, signOut,
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

// Función de estatus
export const checkAuthStatus = (callback) => {
  auth.onAuthStateChanged((user) => {
    callback(user);
  });
};

// Funcion para cerrar sesion
export const signOutUser = () => signOut(auth);
