import React from 'react';
import classes from './Education.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { iu, wyncode, yale } from '../../../../images';

const schools = [
  {
    title: 'Wyncode Academy',
    description: 'Web Development',
    icon: wyncode,
    award: 'Winner - Pitch Day 2018',
  },
  {
    title: 'Yale University',
    description: 'Master of Music',
    icon: yale,
    award: 'Philip Frances Nelson Award',
    subHeader: '"Awarded for a student who demonstrates curiosity, talent and the entrepreneurial spirit"',
  },
  {
    title: 'Indiana University',
    description: 'Bachelor of Music',
    icon: iu,
    award: 'L.E.A.D.ING with Initiative Award',
  },
];

const School = ({ title, description, icon, award, subHeader }) => (
  <div className={classes.schoolContainer}>
    <div className={classes.contentContainer}>
      <div className={classes.imageCrop}>
        <img className={classes.image} src={icon} alt="" />
      </div>
      <p>
        <span>{title}</span> - <span>{description}</span>
      </p>
    </div>
    <div className={classes.awardContainer}>
      <FontAwesomeIcon icon={faAward} /> <p>{award}</p>
    </div>
    {subHeader && <p>{subHeader}</p>}
  </div>
);

const Education = () => (
  <div className={classes.container}>
    <h4>EDUCATION</h4>
    {schools.map(info => (
      <School {...info} />
    ))}
  </div>
);

export default Education;
