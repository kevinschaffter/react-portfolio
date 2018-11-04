import { faJs, faReact, faNodeJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

const logos = [faJs, faReact, faNodeJs, faHtml5, faCss3];
const text = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS'];
export const iconInfo = logos.reduce((acc, icon, i) => acc.concat({ icon, text: text[i] }), []);
