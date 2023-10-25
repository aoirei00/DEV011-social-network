// file home.js
function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const image = document.createElement('img');

  image.src = './img-sn/festilogo1.png';
  title.textContent = 'Welcome to my project';

  button.textContent = 'login';
  buttonRegister.textContent = 'Register';

  button.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  section.append(image, title, button, buttonRegister);
  return section;
}

export default home;
