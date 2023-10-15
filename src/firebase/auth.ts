import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import firebaseApp from './config';

export const auth = getAuth(firebaseApp);
const UNEXPECTED_ERROR = 'Unexpected error, please try again later';

const formatAuthError = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/invalid-login-credentials':
        return 'Oops! Invalid credentials';
      case 'auth/email-already-in-use':
        return 'Oops! Email already in use';
      default:
        return import.meta.env.MODE === 'development' ? error.code : UNEXPECTED_ERROR;
    }
  } else {
    return UNEXPECTED_ERROR;
  }
};

export const createAccount = async (email: string, password: string): Promise<string | null> => {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(`user ${credentials.user.email} created`);
    return null;
  } catch (err) {
    const error = formatAuthError(err);
    console.log(error);
    return error;
  }
};

export const login = async (email: string, password: string): Promise<string | null> => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(`user ${credentials.user.email} signed in`);
    return null;
  } catch (err) {
    const error = formatAuthError(err);
    console.log(error);
    return error;
  }
};

export const logout = () => signOut(auth);
