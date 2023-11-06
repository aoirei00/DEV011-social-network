import head from './head.js';
import createPost from './createPost.js';
import post from './post.js';

function muro(navigateTo) {
  console.log('muro');
  const sectionWall = document.createElement('section');
  sectionWall.classList.add('section-wall');
  const headComponents = head();
  const createPostComponents = createPost();
  const postComponents = post();
  sectionWall.append(headComponents, createPostComponents, postComponents);

  return sectionWall;
}

export default muro;
