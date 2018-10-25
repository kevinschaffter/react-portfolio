import React, { Component } from 'react';
import { Landing, About } from './';
import { Header, Footer, Background } from '../components/';

export default class AppRoot extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <Landing />
        <About />
        {/* <Footer /> */}
        {/* <Background /> */}
      </>
    );
  }
}
