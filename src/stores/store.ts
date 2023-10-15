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
    if (error) return toast.error(error);
    toast.success('Welcome back');
  },
  createAccount: async (email, password) => {
    const error = await firebaseAuth.createAccount(email, password);
    if (error) return toast.error(error);
    toast.success('Account successfully created');
  },
  logout: async () => {
    await firebaseAuth.logout();
    toast.success('Successfully logged out');
  },
}));

export default useStore;
