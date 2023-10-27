import head from './head.js';
import createPost from './createPost.js';

function muro(navigateTo) {
  console.log('muro');
  const sectionWall = document.createElement('section');
  sectionWall.classList.add('section-wall');
  const headComponents = head('probando');
  const createPostComponents = createPost();
  sectionWall.append(headComponents, createPostComponents);

  return sectionWall;
}

export default muro;
