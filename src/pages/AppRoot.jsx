import React, { Component } from 'react';
import { Landing, About, Portfolio } from './';
import { Header, Footer, Background } from '../components/';

export default class AppRoot extends Component {
  handleMoreClick = _ => {
    this.about.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  render() {
    return (
      <>
        {/* <Header /> */}
        <Landing handleMoreClick={this.handleMoreClick} />
        <span
          ref={ref => {
            this.about = ref;
          }}
        />
        <About handleMoreClick={this.handleMoreClick} />
        <Portfolio />
        {/* <Footer /> */}
      </>
    );
  }
}
