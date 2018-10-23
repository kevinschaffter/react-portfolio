import React from 'react';
import './style.scss';

const ParallaxBackground = (props, context) => {
  //   const {
  //     theme: { colorPrimary }
  //   } = context;

  return (
    <div className="parallax" style={{ color: 'white' }}>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

export default ParallaxBackground;
