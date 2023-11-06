function head() {
  const sectionHead = document.createElement('section');
  const containerHead = document.createElement('div');
  const line = document.createElement('div');
  const imgLogoWall = document.createElement('img');
  const btnLogOutWall = document.createElement('button');

  sectionHead.classList.add('section-head');
  containerHead.classList.add('container-head');
  line.classList.add('line-section');
  imgLogoWall.classList.add('imgLogo-wall');
  btnLogOutWall.classList.add('btnSignUp-wall');

  imgLogoWall.src = './img-sn/festilogoLetras.svg';
  btnLogOutWall.textContent = 'Log out';

  containerHead.append(imgLogoWall, btnLogOutWall);
  line.append(containerHead);
  sectionHead.append(containerHead, line);
  return sectionHead;
}

export default head;
