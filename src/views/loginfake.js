import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function loginfake(navigateTo) {
    const containerLog = document.createElement('section');

    containerLog.classList.add('containerLog');
    containerLog.innerHTML = `
       <main >
         <h2 class= 'logIn'>Log In</h2>
        <form class = 'formLogIn'> 
          <label class= 'nameslabel' for="emailAddress">Email address</label>
            <input class='inputLog' type="text" id="emailAddress" placeholder='Email Address'/>

          <label class= 'nameslabel' for="password">Password</label>
            <input class='inputLog' type="text" id="password" placeholder='Password'/>

          <label class= 'nameslabel' for="confirmPassword">Confirm Password</label>
            <input class='inputLog' type="text" id="confirmPassword" placeholder='Confirm Password'/>
        </form>
       </main>
       `
    const buttonLogIn = document.createElement('button');
    buttonLogIn.classList.add('buttonLog');   
    const buttonRegister = document.createElement('button');
    buttonRegister.classList.add('buttonReg');
    const buttonReturn = document.createElement('button');
    buttonReturn.classList.add('buttonRet');
    const other = document.createElement('section');
    other.classList.add('otherOption');

    other.textContent = 'You can access with your Google Account';

    const buttonGoogle = document.createElement('button');
    buttonGoogle.classList.add('googlelog');
    const imageGoogle = document.createElement('img');
    imageGoogle.classList.add('imgGoogle');

    imageGoogle.src = '../../img-sn/google.png';
    imageGoogle.alt = 'Google png';
    
    // buttonGoogle.appendChild(imageGoogle);
    // document.body.appendChild(buttonGoogle);

    buttonGoogle.addEventListener('click', () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        // Abre una ventana emergente para iniciar sesión con Google
        signInWithPopup(auth, provider).then((result) => { // El usuario ha iniciado sesión con éxito con Google
            const user = result.user;
            console.log('Usuario autenticado con éxito:', user);
            history.pushState(null, null, '/wall');

            // llama a la función de navegación para cargar la vista "wall"
            navigateTo('/wall');
        }).catch((error) => { // Handle Errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de autenticación con Google:', errorCode, errorMessage);
        });
    });

    buttonLogIn.textContent = 'Log In';
    buttonLogIn.addEventListener('click', () => {
      navigateTo('/profile');
    })

    buttonRegister.textContent = 'Register';
    buttonRegister.addEventListener('click', () => {
        navigateTo('/register');
    });

    buttonReturn.textContent = 'Return';
    buttonReturn.addEventListener('click', () => {
        navigateTo('/');
    });
    
    buttonGoogle.appendChild(imageGoogle);
    containerLog.append(buttonLogIn, other, buttonGoogle, buttonRegister, buttonReturn);
    return containerLog;
}
export default loginfake;
