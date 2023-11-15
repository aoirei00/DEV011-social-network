// importamos la funcion que vamos a testear
/**
 * @jest-environment jsdom
 */

// Importa las funciones individuales desde la ruta correcta
import { createPostFirestore, paintRealTime, deletePost, updatePost } from '../src/lib/firestore';

// Mock del módulo firestore.js
jest.mock('../src/lib/firestore.js', () => {
  const originalModule = jest.requireActual('../src/lib/firestore.js');
  return {
    ...originalModule,
    db: {
      ...originalModule.db,
      addDoc: jest.fn(),
      onSnapshot: jest.fn(),
      deleteDoc: jest.fn(),
      updateDoc: jest.fn(),
    },
  };
});

describe('Firestore Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('createPostFirestore should add a new post', async () => {
    await createPostFirestore('New post');
    expect(firestore.db.addDoc).toHaveBeenCalledWith(
      expect.anything(),
      {
        comment: 'New post',
        date: expect.anything(),
        likes: [],
      },
    );
  });

  test('paintRealTime should set up a snapshot listener', () => {
    paintRealTime(() => {});
    expect(firestore.db.onSnapshot).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(Function),
    );
  });

  test('deletePost should delete a post', async () => {
    await deletePost('post-id-to-delete');
    expect(firestore.db.deleteDoc).toHaveBeenCalledWith(
      expect.anything(),
      'post-id-to-delete',
    );
  });

  test('updatePost should update a post', async () => {
    await updatePost('post-id-to-update', { comment: 'Updated post' });
    expect(firestore.db.updateDoc).toHaveBeenCalledWith(
      expect.anything(),
      'post-id-to-update',
      { comment: 'Updated post' },
    );
  });
});