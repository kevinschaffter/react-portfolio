import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import resume from '../../images/kevin_resume.pdf';

export const iconInfo = [
  {
    icon: faLinkedin,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kevin-schaffter',
  },
  {
    icon: faGithub,
    text: 'Github',
    link: 'https://github.com/kevinschaffter',
  },
  {
    icon: faEnvelope,
    text: 'Email',
    link: 'mailto:kevin@schaffters.com',
  },
  {
    icon: faFile,
    text: 'resume',
    link: resume,
  },
];
