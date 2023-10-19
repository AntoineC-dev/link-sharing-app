export type TPlatform =
  | 'github'
  | 'frontendmentor'
  | 'twitter'
  | 'linkedin'
  | 'youtube'
  | 'facebook'
  | 'twitch'
  | 'devto'
  | 'codewars'
  | 'codepen'
  | 'freecodecamp'
  | 'gitlab'
  | 'hashnode'
  | 'stackoverflow';

export type TLink = {
  uid: string;
  platform: TPlatform;
  url: string;
  order: number;
};
