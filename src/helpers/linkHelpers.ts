import { TPlatform } from '../types';
import IconGithub from '../assets/icon-github.svg?react';
import IconFEM from '../assets/icon-frontend-mentor.svg?react';
import IconTwitter from '../assets/icon-twitter.svg?react';
import IconLinkedin from '../assets/icon-linkedin.svg?react';
import IconYoutube from '../assets/icon-youtube.svg?react';
import IconFacebook from '../assets/icon-facebook.svg?react';
import IconTwitch from '../assets/icon-twitch.svg?react';
import IconDevto from '../assets/icon-devto.svg?react';
import IconCodewars from '../assets/icon-codewars.svg?react';
import IconCodepen from '../assets/icon-codepen.svg?react';
import IconFCC from '../assets/icon-freecodecamp.svg?react';
import IconGitlab from '../assets/icon-gitlab.svg?react';
import IconHashnode from '../assets/icon-hashnode.svg?react';
import IconStackoverflow from '../assets/icon-stack-overflow.svg?react';

const rGithub = new RegExp(/https:\/\/github.com\/([A-z])\w+/);
const rFrontendmentor = new RegExp(/https:\/\/github.com\/([A-z])\w+/);

export const getLinkRegexp = (platform: TPlatform) => {
  switch (platform) {
    case 'github':
      return rGithub;
    case 'frontendmentor':
      return rFrontendmentor;
    default:
      return rGithub;
  }
};

export const getLinkPlaceholder = (platform: TPlatform) => {
  switch (platform) {
    case 'github':
      return 'e.g. https://www.github.com/johnappleseed';

    default:
      return 'e.g. https://www.github.com/johnappleseed';
  }
};

export const getPlatformLabel = (platform: TPlatform) => {
  switch (platform) {
    case 'github':
      return 'GitHub';
    case 'frontendmentor':
      return 'Frontend Mentor';
    case 'twitter':
      return 'Twitter';
    case 'linkedin':
      return 'LinkedIn';
    case 'youtube':
      return 'YouTube';
    case 'facebook':
      return 'Facebook';
    case 'twitch':
      return 'Twitch';
    case 'devto':
      return 'Dev.to';
    case 'codewars':
      return 'Codewars';
    case 'codepen':
      return 'Codepen';
    case 'freecodecamp':
      return 'freeCodeCamp';
    case 'gitlab':
      return 'GitLab';
    case 'hashnode':
      return 'Hashnode';
    case 'stackoverflow':
      return 'Stack Overflow';
  }
};

export const getPlatformIcon = (platform: TPlatform) => {
  switch (platform) {
    case 'github':
      return IconGithub;
    case 'frontendmentor':
      return IconFEM;
    case 'twitter':
      return IconTwitter;
    case 'linkedin':
      return IconLinkedin;
    case 'youtube':
      return IconYoutube;
    case 'facebook':
      return IconFacebook;
    case 'twitch':
      return IconTwitch;
    case 'devto':
      return IconDevto;
    case 'codewars':
      return IconCodewars;
    case 'codepen':
      return IconCodepen;
    case 'freecodecamp':
      return IconFCC;
    case 'gitlab':
      return IconGitlab;
    case 'hashnode':
      return IconHashnode;
    case 'stackoverflow':
      return IconStackoverflow;
  }
};
