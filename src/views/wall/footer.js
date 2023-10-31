function footer(navigateTo) {
  const containerFooterWall = document.createElement('div');
  const btnHome = document.createElement('button');
  const btnCreatePost = document.createElement('button');
  const btnProfile = document.createElement('button');
  containerFooterWall.append(btnHome, btnCreatePost, btnProfile);

  containerFooterWall.classList.add('containerFooter-wall');
  btnHome.classList.add('btnHome-footer');
  btnCreatePost.classList.add('btnCreatePost-footer');
  btnProfile.classList.add('btnProfile-footer');


 containerFooterWall.append(btnHome, btnCreatePost, btnProfile);
  return containerFooterWall;
}
export default footer;
