import { navigateTo } from '../src/main';

describe('Prueba el funcionamiento de la funcion navigateTo del archivo main.js', () => {
  it('muestra en el navegador la ruta correcta', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    navigateTo('/muro');

    expect(window.location.href).toBe('http://localhost/muro');
    expect(document.getElementById('root').firstChild).not.toBeNull();
  });

  it('Muestra un mensaje de error si la ruta es inexistente', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    navigateTo('/nonexistent');

    expect(window.location.href).toBe('http://localhost/error');
  });
});