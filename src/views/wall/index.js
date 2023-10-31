import head from './head.js';
import createPost from './createPost.js';
import post from './post.js';
import footer from './footer.js';

function muro(navigateTo) {
  console.log('muro');
  const sectionWall = document.createElement('section');
  sectionWall.classList.add('section-wall');
  const headComponents = head(navigateTo);
  const createPostComponents = createPost();
  const postComponents = post();
  const footerComponents = footer(navigateTo);
  sectionWall.append(headComponents, createPostComponents, postComponents, footerComponents);

  return sectionWall;
}

export default muro;
