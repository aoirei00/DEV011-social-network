// importamos la funcion que vamos a testear
/**
 * @jest-environment jsdom
 */

// Se immportan las funciones de autenticación y el módulo de firebase
import {
  createPostFirestore, paintRealTime, deletePost, updatePost,
} from '../src/lib/firestore';

// Mock del módulo firestore.js
jest.mock('../src/lib/firestore.js', () => {
  const originalModule = jest.requireActual('../src/lib/firestore.js');
  return {
    ...originalModule,
    addDoc: jest.fn(),
    getDocs: jest.fn(),
    onSnapshot: jest.fn(),
    deleteDoc: jest.fn(),
    updateDoc: jest.fn(),
  };
});

describe('Firestore Functions', () => {
  afterEach(() => {
    // Limpiar los mocks después de cada prueba
    jest.clearAllMocks();
  });

  test('createPostFirestore should add a new post', async () => {
    // Llamar a la función
    await createPostFirestore('New post');

    // Asegurar que la función addDoc fue llamada con los parámetros esperados
    expect(addDoc).toHaveBeenCalledWith(
      expect.anything(), // Puedes ajustar esto según la estructura de tus datos
      {
        comment: 'New post',
        date: expect.anything(),
        likes: [],
      },
    );
  });

  test('paintRealTime should set up a snapshot listener', () => {
    // Llamar a la función
    paintRealTime(() => {});

    // Asegurar que la función onSnapshot fue llamada con los parámetros esperados
    expect(onSnapshot).toHaveBeenCalledWith(
      expect.anything(), // Puedes ajustar esto según la estructura de tus datos
      expect.any(Function), // Puedes ajustar esto según la estructura de tus datos
    );
  });

  test('deletePost should delete a post', async () => {
    // Llamar a la función
    await deletePost('post-id-to-delete');

    // Asegurar que la función deleteDoc fue llamada con los parámetros esperados
    expect(deleteDoc).toHaveBeenCalledWith(
      expect.anything(), // Puedes ajustar esto según la estructura de tus datos
      'post-id-to-delete',
    );
  });

  test('updatePost should update a post', async () => {
    // Llamar a la función
    await updatePost('post-id-to-update', { comment: 'Updated post' });

    // Asegurar que la función updateDoc fue llamada con los parámetros esperados
    expect(updateDoc).toHaveBeenCalledWith(
      expect.anything(), // Puedes ajustar esto según la estructura de tus datos
      'post-id-to-update',
      { comment: 'Updated post' },
    );
  });
});
