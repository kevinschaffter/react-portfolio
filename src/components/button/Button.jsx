import React from 'react';
import classes from './Button.module.scss';
import classnames from 'classnames';

const Button = ({ onClick, children, small, link, className, style }) => {
  return (
    <a
      style={style}
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
