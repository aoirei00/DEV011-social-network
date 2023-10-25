function register(navigateTo) {
  const containerReg = document.createElement('section');

  containerReg.classList.add('container-register');
  containerReg.innerHTML = `
  <div class='container'>
    <div class='container-left'></div>
    
        <div class='container-right'>
        <div class='head-register'>
          <div class='btn-back-home'>
              <a href='/'> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <circle cx="17.5" cy="17.5" r="16" stroke="white" stroke-width="3" />
                <path d="M20 10L11 17.5L20 25" stroke="white" stroke-width="3" stroke-linecap="round" />
              </svg></a>
          </div>
              <div class='title-register'> 
                <h2>Registro</h2>
              </div>
        </div>
      
              <form class='form-register'>
                <label for="emailAdress">Email adress</label>
                  <input type="text" id="emailAdress" />

                <label for="name">Name</label>
                  <input type="text" id="name" />

                <label for="password">Password</label>
                  <input type="text" id="password" />

                <label for="confirm password">Confirm Password</label>
                  <input type="text" id="confirmPassword" />

                <button>Create count</button>
            </form>


        </div>

    </div>

  </div>
`;

  containerReg.append();
  return containerReg;
}

export default register;
