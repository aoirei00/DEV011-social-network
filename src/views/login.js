// file login.js
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function login(navigateTo) {
    const containerLog = document.createElement('section');

    containerLog.classList.add('containerLog');
    containerLog.innerHTML = `
       <main >
         <h2 class= 'logIn'>Log In</h2>
        <form class = 'formLogIn'> 
          <label class= 'emailLog' for="emailAddress">Email address</label>
            <input class='inputLog' type="email" id="emailAddress" placeholder='Email Address'/>

          <label class= 'passwordLog' for="password">Password</label>
            <input class='inputLog' type="password" id="password" placeholder='Password'/>
          
          <dd class='linkToResetPassword'> 
            <a href="https://www.weverse.io/" class='reset' target="_blank"> Forgot your password? </a>
          </dd>
        </form>
       </main>
       `;
    const buttonLogIn = document.createElement('button'); 
    const buttons = document.createElement('section');  
    const buttonRegister = document.createElement('button');
    const buttonReturn = document.createElement('button');
    const other = document.createElement('section');
    buttons.classList.add('buttons');
    buttonLogIn.classList.add('buttonLog'); 
    buttonRegister.classList.add('buttonReg');
    buttonReturn.classList.add('buttonRet');
    other.classList.add('otherOption');

    other.textContent = 'You can access with your Google Account';

    const buttonGoogle = document.createElement('button');
    buttonGoogle.classList.add('googlelog');
    const imageGoogle = document.createElement('img');
    imageGoogle.classList.add('imgGoogle');

    imageGoogle.src = '../../img-sn/google.png';
    imageGoogle.alt = 'Google png';

    buttonGoogle.addEventListener('click', () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        // Abre una ventana emergente para iniciar sesión con Google
        signInWithPopup(auth, provider).then((result) => { // El usuario ha iniciado sesión con éxito con Google
            const user = result.user;
            console.log('Usuario autenticado con éxito:', user);
            history.pushState(null, null, '/muro');

            // llama a la función de navegación para cargar la vista "wall"
            navigateTo('/muro');
        }).catch((error) => { // Handle Errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de autenticación con Google:', errorCode, errorMessage);
        });
    });

    buttonLogIn.textContent = 'Log In';
    // buttonLogIn.addEventListener('click', () => {
    //   navigateTo('/profile');
    // })

    buttonRegister.textContent = 'Register';
    buttonRegister.addEventListener('click', () => {
        navigateTo('/register');
    });

    buttonReturn.textContent = 'Return';
    buttonReturn.addEventListener('click', () => {
        navigateTo('/');
    });

    // LOGUEO EMAIL

    buttonLogIn.addEventListener('click', () => {
      event.preventDefault();
      const email = containerLog.querySelector('#emailAddress').value;
      const password = containerLog.querySelector('#password').value;

      function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      }
      function isValidPassword(password) {
        // Verifica que la contraseña tenga al menos 8 caracteres
        if (password.length < 8) {
          return false;
        }
      
        return true; // La contraseña cumple con todos los criterios
      }

      const errors = [];
      if(!isValidEmail(email)) {
        errors.push('Por favor escribe un correo válido');
      }
      if(password.length < 8){
        errors.push('La contraseña debe contener al menos 8 caracteres');
      }
      // Realiza validación de contraseña aquí si es necesario
      if (!isValidPassword(password)) {
        errors.push('La contraseña no cumple con los criterios necesarios.');
      }
      if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
      }
      
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('Inicio de sesión exitoso:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error de inicio de sesión:', errorCode, errorMessage);
          //alert de error
          alert('Error: ' + errorMessage);
        })
    });
    
    buttonGoogle.appendChild(imageGoogle);
    buttons.append(buttonRegister, buttonReturn);
    containerLog.append(buttonLogIn, other, buttonGoogle, buttons);
    return containerLog;
}
export default login;
