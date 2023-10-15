import { User } from 'firebase/auth';
import { create } from 'zustand';
import { firebaseAuth } from '../firebase';

type Store = {
  user: User | null;
  error: string | null;
  setUser: (user: User | null) => void;
  setError: (error: string | null) => void;
  login: (email: string, password: string) => void;
  createAccount: (email: string, password: string) => void;
  logout: () => void;
};

const useStore = create<Store>()((set) => ({
  user: null,
  error: null,
  setUser: (user) => set((state) => ({ ...state, user })),
  setError: (error) => set((state) => ({ ...state, error })),
  login: async (email, password) => {
    const error = await firebaseAuth.login(email, password);
    if (error) set((state) => ({ ...state, error }));
  },
  createAccount: async (email, password) => {
    const error = await firebaseAuth.createAccount(email, password);
    if (error) set((state) => ({ ...state, error }));
  },
  logout: () => firebaseAuth.logout(),
}));

export default useStore;
