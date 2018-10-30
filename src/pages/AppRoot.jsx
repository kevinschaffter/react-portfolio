import React, { Component } from 'react';
import { Landing, About, Portfolio, Contact } from './';
import { Header, Footer, Background } from '../components/';

export default class AppRoot extends Component {
  handleMoreClick = page => {
    this[page].scrollIntoView({
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
        <span
          ref={ref => {
            this.portfolio = ref;
          }}
        />
        <Portfolio />
        <Contact />
        {/* <Footer /> */}
      </>
    );
  }
}
