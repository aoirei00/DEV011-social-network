function footer(navigateTo) {
  const containerFooterWall = document.createElement('div');
  const btnHome = document.createElement('button');
  const btnCreatePost = document.createElement('button');
  const btnProfile = document.createElement('button');
  containerFooterWall.append(btnHome, btnCreatePost, btnProfile);
}
export default footer;
