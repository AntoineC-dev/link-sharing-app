import { create } from 'zustand';
import { TLink, TSite } from '../types';
import { nanoid } from 'nanoid';

const INITIAL_LINKS: TLink[] = [
  { uid: nanoid(), site: 'github', url: 'https://github.com/AntoineC-dev' },
  { uid: nanoid(), site: 'frontendmentor', url: 'https://www.frontendmentor.io/profile/AntoineC-dev' },
];

type Store = {
  links: TLink[];
  createLink: (site?: TSite, url?: string) => void;
  updateLink: (uid: string, site: TSite, url: string) => void;
  deleteLink: (uid: string) => void;
};

const useLinkStore = create<Store>()((set) => ({
  links: INITIAL_LINKS,
  createLink: (site = 'github', url = '') =>
    set((state) => {
      const uid = nanoid();
      return { ...state, links: [...state.links, { uid, site, url }] };
    }),
  updateLink: (uid, site, url) =>
    set((state) => {
      const links = state.links.map((link) => (link.uid === uid ? { ...link, site, url } : link));
      return { ...state, links };
    }),
  deleteLink: (uid) =>
    set((state) => {
      const links = state.links.filter((link) => link.uid === uid);
      return { ...state, links };
    }),
}));

export default useLinkStore;
