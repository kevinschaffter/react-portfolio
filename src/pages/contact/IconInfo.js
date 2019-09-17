import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import resume from '../../images/resume.pdf';

export const iconInfo = [
  {
    icon: faLinkedin,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kevin-schaffter',
  },
  {
    icon: faGithub,
    text: 'Github',
    link: 'https://github.com/kschaffter-carecloud',
  },
  {
    icon: faEnvelope,
    text: 'Email',
    link: 'mailto:kevinschaffter@gmail.com',
  },
  {
    icon: faFile,
    text: 'resume',
    link: resume,
  },
];
