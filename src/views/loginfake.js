import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function loginfake(navigateTo) {
  const containerLog = document.createElement('section');

  containerLog.classList.add('containerLog');
  containerLog.innerHTML = `
  <dl class='container'>
    <dt class='containerLeft'></dt>
    
        <dt class='containerRight'>
        <div class='headerLogIn'>
          <dl class='btn-back-home'>
              <a href='/'> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <circle cx="17.5" cy="17.5" r="16" stroke="white" stroke-width="3" />
                <path d="M20 10L11 17.5L20 25" stroke="white" stroke-width="3" stroke-linecap="round" />
              </svg></a>
          </dl>
              <div class='titleLogIn'> 
                <h2>LogIn</h2>
              </div>
        </div>
      
              <form class='formLogIn'>
                <label for="emailAddress">Email address</label>
                  <input type="text" id="emailAddress" />
                  
                <label for="password">Password</label>
                  <input type="password" id="password" />

                <dd class='linkToResetPassword'> 
                <a href="https://www.weverse.io/" class='reset' target="_blank"> Forgot your password? </a>
                </dd>

                <button id="logInButton">Log In</button>

                <section>
                  <h6> You can access with your Google Account </h6>
                  <button id="buttonGoogle">
                  <img src = '../img-sn/google_icon.svg' class='imgGoogle' alt='Google png'/>
                  </button>
                </section>

                <h6> or </h6>
                <button id="registerButton">Create an Account</button>

            </form>
        </dt>
    </dl>
  </div>
`;
//                <button id="returnButton">Return</button>
const googleButton = containerLog.querySelector('#buttonGoogle');
const logInButton = containerLog.querySelector('#logInButton');
const buttonRegister = containerLog.querySelector('#registerButton');
// const buttonReturn = containerLog.querySelector('#returnButton');

googleButton.addEventListener('click', () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Abre una ventana emergente para iniciar sesión con Google
    signInWithPopup(auth, provider).then((result) => { // El usuario ha iniciado sesión con éxito con Google
        const user = result.user;
        console.log('Usuario autenticado con éxito:', user);
        history.pushState(null, null, '/muro');

        // llama a la función de navegación para cargar la vista "wall"
        navigateTo('/wall');
    }).catch((error) => { // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error de autenticación con Google:', errorCode, errorMessage);
    });
});

logInButton.addEventListener('click', () => {
    navigateTo('/profile');
})

buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
});

// buttonReturn.addEventListener('click', () => {
//     navigateTo('/');
// });

  containerLog.append();
  return containerLog;
}

export default loginfake;

