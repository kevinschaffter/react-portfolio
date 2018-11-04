import React from 'react';
import classes from './Button.module.scss';
import classnames from 'classnames';

const Button = ({ onClick, children, small, link, className }) => {
  return (
    <a
      onClick={onClick}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classnames(classes.btn, { [classes.small]: small }, className)}
    >
      {children}
    </a>
  );
};

export default Button;
