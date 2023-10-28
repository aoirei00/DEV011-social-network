// file login.js
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

  const divp = document.createElement('div');
  divp.classList.add('p');

  inputEmail.placeholder = 'Write email';
  inputPass.placeholder = 'pass';

  title.textContent = 'Login';
  title.classList.add('p');

  buttonLogin.textContent = 'go';
  buttonRegister.textContent = 'Register';
  buttonGoogle.textContent = 'Google';

  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonLogin, divp);
  section.append(title, form, buttonRegister, buttonGoogle, buttonReturn);

  return section;
}

export default login;
