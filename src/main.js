// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

// file main.js
import home from './views/home';
import login from './views/login.js';
import error from './views/error.js';
import wall from './views/wall.js';


const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/error', component: error },
    { path: '/wall', component: wall },
];




const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
   } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

//myFunction();
