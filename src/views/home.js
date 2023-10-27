// file home.js
function home(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('sectionho');
  section.classList.add('textho');
  const title = document.createElement('h2');
  // section.classList.add('textho');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonho');
  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonho');
  const image = document.createElement('img');
  image.classList.add('imgho');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('googlelog');
  const other = document.createElement('h6');
  other.classList.add('otherOption');

  image.src = './img-sn/festilogo1.png';
  title.textContent = 'Welcome to Festigram, the largest community of concerts and festivals around the world!';
  other.textContent = 'You can access with your Google Account';
  buttonGoogle.textContent = 'Google';
 
  buttonLogin.textContent = 'Login';
  buttonLogin.addEventListener('click', () => {
      navigateTo('/login');
  });

  buttonRegister.textContent = 'Register'; 
  buttonRegister.addEventListener('click', () => {
      navigateTo('/register');
  });
  

  section.append(image, title, buttonLogin, buttonRegister, other, buttonGoogle);
  return section;
}

export default home;