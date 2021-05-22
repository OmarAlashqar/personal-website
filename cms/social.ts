import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import {
  FaGoodreads,
} from 'react-icons/fa';

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
      tooltip: 'Dribbble',
      href: 'https://dribbble.com/oalashqar',
      icon: AiFillDribbbleCircle,
    },
    {
      tooltip: 'Goodreads',
      href: 'https://www.goodreads.com/omaralashqar',
      icon: FaGoodreads,
    }
  ],
};
