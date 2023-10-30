// importamos la funcion que vamos a testear
//import { myFunction } from '../src/views/index';

//describe('myFunction', () => {
  //it('debería ser una función', () => {
    //expect(typeof myFunction).toBe('function');
  //});
//});

import { navigateTo } from './src/main';

describe('Prueba el funcionamiento de la funcion navigateTo del archivo main.js', () => {
  let pushStateMock;
  let createElementMock;
  let appendChildMock;

  beforeEach(() => {
    pushStateMock = jest.fn();
    createElementMock = jest.fn(() => ({ firstChild: null }));
    appendChildMock = jest.fn();

    window.history.pushState = pushStateMock;
    document.createElement = createElementMock;
    document.getElementById = jest.fn(() => ({ appendChild: appendChildMock }));
  });

  it('muestra en el navegador la ruta correcta', () => {
    navigateTo('/muro');

    expect(pushStateMock).toHaveBeenCalledWith({}, '/muro', 'http://localhost/muro');
    expect(createElementMock).toHaveBeenCalledWith('div');
    expect(appendChildMock).toHaveBeenCalled();
  });

  it('Muestra un mensaje de error si la ruta es inexistente', () => {
    navigateTo('/nonexistent');

    expect(pushStateMock).toHaveBeenCalledWith({}, '/error', 'http://localhost/error');
  });
});
