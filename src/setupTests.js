// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock Firebase compat modules to avoid pulling in Node-specific Web APIs in tests
jest.mock('firebase/compat/auth', () => ({}));
jest.mock('firebase/compat/app', () => {
  const authMethods = {
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
  };

  const firebaseAppMock = {
    auth: jest.fn(() => authMethods),
  };

  const apps = [];

  const initializeApp = jest.fn(() => {
    if (!apps.length) {
      apps.push(firebaseAppMock);
    }
    return firebaseAppMock;
  });

  return {
    __esModule: true,
    default: {
      initializeApp,
      app: jest.fn(() => firebaseAppMock),
      apps,
      auth: jest.fn(() => authMethods),
    },
  };
});
