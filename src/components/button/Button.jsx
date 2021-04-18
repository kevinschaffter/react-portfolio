import React from 'react';
import classnames from 'classnames';
import classes from './Button.module.scss';

const Button = ({ onClick, children, small, link, className, style }) => (
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

export default Button;
