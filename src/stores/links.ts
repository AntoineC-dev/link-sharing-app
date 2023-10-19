import { create } from 'zustand';
import { TLink, TPlatform } from '../types';
import { nanoid } from 'nanoid';

const INITIAL_LINKS: TLink[] = [
  { uid: nanoid(), platform: 'github', url: 'https://github.com/AntoineC-dev', order: 0 },
  { uid: nanoid(), platform: 'frontendmentor', url: 'https://www.frontendmentor.io/profile/AntoineC-dev', order: 1 },
];

type Store = {
  links: TLink[];
  shouldSave: boolean;
  createLink: (platform?: TPlatform, url?: string) => void;
  updateLink: (uid: string, platform: TPlatform, url: string) => void;
  deleteLink: (uid: string) => void;
  saveLinks: () => void;
};

const useLinkStore = create<Store>()((set) => ({
  links: INITIAL_LINKS,
  shouldSave: false,
  createLink: (platform = 'github', url = '') =>
    set((state) => {
      const uid = nanoid();
      return { ...state, links: [...state.links, { uid, platform, url, order: state.links.length }] };
    }),
  updateLink: (uid, platform, url) =>
    set((state) => {
      const links = state.links.map((link) => (link.uid === uid ? { ...link, platform, url } : link));
      return { ...state, links, shouldSave: true };
    }),
  deleteLink: (uid) =>
    set((state) => {
      const links = state.links.filter((link) => link.uid !== uid);
      //TODO: Save changes in firestore
      return { ...state, links };
    }),
  saveLinks: () =>
    set((state) => {
      //TODO: Save changes in firestore
      return { ...state, shouldSave: false };
    }),
}));

export default useLinkStore;
