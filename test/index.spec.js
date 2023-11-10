// importamos la funcion que vamos a testear
/**
 * @jest-environment jsdom
 */

// Se immportan las funciones de autenticación y el módulo de firebase

jest.mock('../src/lib/firebase', () => {
  // Se mockea todo el módulo firebaseAuth
  const originalModule = jest.requireActual('../src/lib/firebase');
  return {
    ...originalModule,
    createUserWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { uid: '123' } }),
  };
});
// eslint-disable-next-line import/first
import { createEmailPassword } from '../src/lib/auth';
// eslint-disable-next-line import/first
import * as firebaseAuth from '../src/lib/firebase';

describe('Se prueba la funcion createEmailPassword', () => {
  it('Se hace la prueba colocando los argumentos correctos para hace un registro', () => {
    // Se mockea email y password
    const email = 'correo_correcto@gmail.com';
    const password = 'passwordvalido';
    // Se llama a la funcion del archivo auth.js
    const result = createEmailPassword(email, password);
    // Se espera que la funcion se lleme con los argumentos correctos para que se cumpla la prueba.
    // eslint-disable-next-line max-len
    expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(firebaseAuth.auth, email, password);
    // Se espera como resultado el objeto que es el usuario
    return expect(result).resolves.toEqual({ user: { uid: '123' } });
  });
  it('Nos arroja error si hay algun problema o nuestra promesa se rechaza', () => {
    // Se mockea email y password
    const email = 'correo_correcto@gmail.com';
    const password = 'passwordvalido';
    // Se hace mock de la funcion para que se rechace con un error
    firebaseAuth.createUserWithEmailAndPassword.mockRejectedValue(new Error('Fallo la creacion de usuario'));
    // Se llama a la funcion y se espera el rechazo de la promesa
    return expect(createEmailPassword(email, password)).rejects.toThrow('Fallo la creacion de usuario');
  });
});
