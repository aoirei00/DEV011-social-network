function head() {
  const sectionHead = document.createElement('section');
  const containerHead = document.createElement('div');
  const line = document.createElement('div');
  const imgLogoWall = document.createElement('img');
  const btnSignUpWall = document.createElement('button');

  sectionHead.classList.add('section-head');
  containerHead.classList.add('container-head');
  line.classList.add('line-section');
  imgLogoWall.classList.add('imgLogo-wall');
  btnSignUpWall.classList.add('btnSignUp-wall');

  imgLogoWall.src = './img-sn/festilogoLetras.svg';
  btnSignUpWall.textContent = 'Sign Up';

  containerHead.append(imgLogoWall, btnSignUpWall);
  line.append(containerHead);
  sectionHead.append(containerHead, line);
  return sectionHead;
}

export default head;