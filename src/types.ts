export type TSite =
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
  site: TSite;
  url: string;
};
