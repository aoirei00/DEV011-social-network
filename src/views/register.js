import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function register(navigateTo) {
  const containerReg = document.createElement('section');
  containerReg.classList.add('container-register');
  containerReg.innerHTML = `
    <div class='container'>
      <div class='container-left'></div>
      <div class='container-right'>
        <div class='head-register'>
          <div class='btn-back-home'>
            <a href='/'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <circle cx="17.5" cy="17.5" r="16" stroke="white" stroke-width="3" />
                <path d="M20 10L11 17.5L20 25" stroke="white" stroke-width="3" stroke-linecap="round" />
              </svg>
            </a>
          </div>
          <div class='title-register'> 
            <h2>Registro</h2>
          </div>
        </div>
        <form class='form-register'>
          <label for="emailAddress">Email address</label>
          <input type="text" id="emailAddress" />
          <label for="fullName">Name</label>
          <input type="text" id="name" />
          <label for="password">Password</label>
          <input type="password" id="password" />
          <label for="confirm password">Confirm Password</label>
          <input type="password" id="confirmPassword" />
          <button id="registerButton">Create Account</button>
        </form>
      </div>
    </div>
  `;

  const registerButton = containerReg.querySelector('#registerButton');
  registerButton.addEventListener('click', () => {
    event.preventDefault();
    const email = containerReg.querySelector('#emailAddress').value;
    const password = containerReg.querySelector('#password').value;
    const name = containerReg.querySelector('#name').value;
    const confirmPassword = containerReg.querySelector('#confirmPassword').value;
    
    function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }

    const errors = [];
    if (!isValidEmail(email)) {
      errors.push('Por favor escribe un correo válido');
    }
    if (name.length === 0) {
      errors.push('No has completado el campo Name');
    }
    if (password.length < 8) {
      errors.push('La contraseña debe contener al menos 8 caracteres.');
    }
    if (password !== confirmPassword) {
      errors.push('Las contraseñas no coinciden. Vuelve a intentar.');
    }
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado con éxito:', user);

        updateProfile(user, {
          displayName: name,
        }).then(() => {
          console.log('Perfil de usuario actualizado con éxito:', user);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error de actualización de perfil:', errorCode, errorMessage);
        });

        navigateTo('/muro');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          const errorMessage = 'Este correo electrónico ya está registrado. Inicia sesión en lugar de registrarte.';
          alert(errorMessage);
        } else {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error de registro:', errorCode, errorMessage);
        }
      });
  });

  containerReg.append();
  return containerReg;
}

export default register;