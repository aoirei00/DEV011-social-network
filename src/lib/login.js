// file login.js
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
  
    buttonReturn.textContent = 'Return to home';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
    
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(title, form, buttonRegister, buttonGoogle, buttonReturn);
  
    return section;
  }
  
  export default login;