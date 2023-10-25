// file login.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function login(navigateTo) {
    const section = document.createElement('section');
    section.classList.add('sectionlo')
    const title = document.createElement('h2');
    title.classList.add('textlo');
    const buttonReturn = document.createElement('button');
    buttonReturn.classList.add('buttonlo');
    const form = document.createElement('form');
    form.classList.add('formlo');
    const inputEmail = document.createElement('input');
    inputEmail.classList.add('inputlo');
    const inputPass = document.createElement('input');
    inputPass.classList.add('inputlo');
    const buttonLogin = document.createElement('button');
    buttonLogin.classList.add('buttonlo');
    const buttonRegister = document.createElement('button');
    buttonRegister.classList.add('buttonlo');
    const buttonGoogle = document.createElement('button')
    buttonGoogle.classList.add('googlelog')
  
    inputEmail.placeholder = 'Write email';
    inputPass.placeholder = 'pass';
  
    title.textContent = 'Log In';
    buttonLogin.textContent = 'go';
    buttonRegister.textContent = 'Register';
    buttonGoogle.textContent = 'Google';
    buttonGoogle.addEventListener('click', () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
      
        // Abre una ventana emergente para iniciar sesión con Google
        signInWithPopup(auth, provider)
          .then((result) => {
            // El usuario ha iniciado sesión con éxito con Google
            const user = result.user;
            console.log('Usuario autenticado con éxito:', user);
            history.pushState(null, null, '/wall');

            //  llama a la función de navegación para cargar la vista "wall"
            navigateTo('/wall');
          })
          .catch((error) => {
            // Handle Errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de autenticación con Google:', errorCode, errorMessage);
          });
      });
  
    buttonReturn.textContent = 'Return to home';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
    
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(title, form, buttonRegister, buttonGoogle, buttonReturn);
  
    return section;
  }
  
  export default login;