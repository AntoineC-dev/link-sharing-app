import { User } from 'firebase/auth';
import { create } from 'zustand';
import { firebaseAuth } from '../firebase';
import toast from 'react-hot-toast';

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => void;
  createAccount: (email: string, password: string) => void;
  logout: () => void;
};

const useStore = create<Store>()((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
  login: async (email, password) => {
    const error = await firebaseAuth.login(email, password);
    if (error) toast.error(error);
  },
  createAccount: async (email, password) => {
    const error = await firebaseAuth.createAccount(email, password);
    if (error) toast.error(error);
  },
  logout: () => firebaseAuth.logout(),
}));

export default useStore;
