// file home.js
function modalCreatePost(navigateTo) {
    const section = document.createElement('section');
    const sectionHead = document.createElement('div');
    const title = document.createElement('h2');
    const btnClose = document.createElement('button');
    const sectionElementPosts = document.createElement('div');
    const txtArea = document.createElement('textarea');
    const imgPost = document.createElement('input');

    section.classList.add('section-modalPost');
    sectionHead.classList.add('sectionHead-modalPost');
    title.classList.add('title-modal'),
    btnClose.classList.add('btnClose-modal');
    sectionElementPosts.classList.add('sectionElements-modal');
    txtArea.classList.add('txtArea-modal');
    imgPost.classList.add('imgPost-modal');

    sectionHead.append(title, btnClose);
    sectionElementPosts.append(txtArea, imgPost);
    section.append(sectionHead, sectionElementPosts);
    return section;
  }
  
  export default modalCreatePost;