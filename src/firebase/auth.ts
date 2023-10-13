import * as React from 'react';
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import firebaseApp from './config';

export const auth = getAuth(firebaseApp);

export const createAccount = async (email: string, password: string) => {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(`user ${credentials.user.email} created`);
    return true;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.message);
    } else {
      console.log(error);
    }
    return false;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(`user ${credentials.user.email} signed in`);
    return true;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.message);
    } else {
      console.log(error);
    }
    return false;
  }
};

export const logout = () => signOut(auth);

export function useAuthStateChange() {
  console.log('custom hook');
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log('auth state changed');
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => listen();
  }, []);

  return user;
}
