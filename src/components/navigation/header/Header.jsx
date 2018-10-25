import React, { Component } from 'react';
import classes from './Header.module.css';
import classnames from 'classnames';

class Header extends Component {
  state = { sticky: false };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    console.log(this.nav.getBoundingClientRect().top);

    Math.abs(this.nav.getBoundingClientRect().top) > 800 && this.setState({ sticky: true });
  };
  render() {
    return (
      <div
        ref={ref => {
          this.nav = ref;
        }}
        className={classnames(classes.nav, { [classes.sticky]: this.state.sticky })}
      >
        "Here is my Header"
      </div>
    );
  }
}

export default Header;
