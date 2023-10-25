// file home.js
function home(navigateTo) {
    const section = document.createElement('section');
    section.classList.add('sectionho');
    const title = document.createElement('h2');
    section.classList.add('textho');
    const buttonLogin = document.createElement('button');
    buttonLogin.classList.add('buttonho');
    const buttonRegister = document.createElement('button');
    buttonRegister.classList.add('buttonho');
    const image = document.createElement('img');
    image.classList.add('imgho');
  
    image.src = './img-sn/festilogo1.png';
    title.textContent = 'Welcome to Festigram, the largest community of concerts and festivals around the world!';
   
    buttonLogin.textContent = 'Login';
    buttonLogin.addEventListener('click', () => {
        navigateTo('/login');
    });

    buttonRegister.textContent = 'Register'; 
    buttonRegister.addEventListener('click', () => {
        navigateTo('/register');
    });
    
  
    section.append(image, title, buttonLogin, buttonRegister);
    return section;
  }
  
  export default home;