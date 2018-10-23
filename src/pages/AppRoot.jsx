import React, { Component } from 'react';
import { Landing } from './';
import { Header, Footer, Background } from '../components/';

export default class AppRoot extends Component {
  render() {
    return (
      <>
        <Header />
        <Landing />
        {/* <Footer /> */}
        <Background />
      </>
    );
  }
}
