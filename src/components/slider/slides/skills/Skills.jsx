import React from 'react';
import classes from './Skills.module.scss';

const Skills = _ => (
  <div className={classes.container}>
    <h4>SKILLS &amp; TOOLS</h4>
    <div>
      <p>Languages:</p>
      <p>JavaScript, TypeScript, Ruby, GraphQL, HTML, CSS/SCSS, JSS</p>
    </div>
    <div>
      <p>Libraries &amp; Frameworks:</p>
      <p>React, Express, Node, Single-Spa, Ruby on Rails, Sinatra, Lodash</p>
    </div>
    <div>
      <p>Testing:</p>
      <p>Jest, Enzyme</p>
    </div>
    <div>
      <p>Concepts &amp; Tools:</p>
      <p>Git, Agile, MVC, OOP, TDD, Responsive Design</p>
    </div>
  </div>
);

export default Skills;
