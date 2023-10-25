// file login.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function login(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
    const buttonRegister = document.createElement('button');
    const buttonGoogle = document.createElement('button');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    inputEmail.placeholder = 'Write email';
    inputPass.placeholder = 'pass';

    title.textContent = 'Login';
    buttonLogin.textContent = 'go';
    buttonRegister.textContent = 'Register';
    buttonGoogle.textContent = 'Google';
    buttonGoogle.addEventListener('click', () => {


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