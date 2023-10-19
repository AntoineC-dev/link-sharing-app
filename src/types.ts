import { PLATFORMS } from './constants';

export type TPlatform = (typeof PLATFORMS)[number];

export type TLink = {
  uid: string;
  platform: TPlatform;
  url: string;
  order: number;
};
