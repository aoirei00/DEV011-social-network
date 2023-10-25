// file home.js
function home(navigateTo) {
    const section = document.createElement('section');
    section.classList.add('sectionho');
    const title = document.createElement('h2');
    section.classList.add('textho');
    const button = document.createElement('button');
    button.classList.add('buttonho');
    const image = document.createElement('img');
    image.classList.add('imgho');
  
    image.src = './img-sn/festilogo1.png';
    title.textContent = 'Welcome to Festigram, the largest community of concerts and festivals around the world!';
   
    button.textContent = 'Login';
    button.addEventListener('click', () => {
        navigateTo('/login');
    });

    
  
    section.append(image, title, button);
    return section;
  }
  
  export default home;