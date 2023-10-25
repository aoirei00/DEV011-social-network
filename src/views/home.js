// file home.js
function home(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const button = document.createElement('button');
    const image = document.createElement('img');
  
    image.src = './img-sn/festilogo1.png';
   
    button.textContent = 'login';
    button.addEventListener('click', () => {
        navigateTo('/login');
      });

    title.textContent = 'Welcome to my project';
  
    section.append(image, title, button);
    return section;
  }
  
  export default home;