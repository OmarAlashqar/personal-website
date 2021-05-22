import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import { ImBooks } from 'react-icons/im';
import { HiFilm } from 'react-icons/hi';

export default {
  email: 'omar.alashqar@uwaterloo.ca',
  resumeURL: '/resume.pdf',
  links: [
    {
      tooltip: 'GitHub',
      href: 'https://github.com/omaralashqar',
      icon: AiFillGithub,
    },
    {
      tooltip: 'LinkedIn',
      href: 'https://www.linkedin.com/in/omaralashqar',
      icon: AiFillLinkedin,
    },
    {
      tooltip: 'Dribbble (Design)',
      href: 'https://dribbble.com/omaralashqar',
      icon: AiFillDribbbleCircle,
    },
    {
      tooltip: 'Goodreads (Books)',
      href: 'https://www.goodreads.com/omaralashqar',
      icon: ImBooks,
    },
    {
      tooltip: 'Letterboxd (Movies)',
      href: 'https://letterboxd.com/plastic_straw',
      icon: HiFilm,
    },
  ],
};
