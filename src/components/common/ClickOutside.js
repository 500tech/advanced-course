import React from 'react';

export default class ClickOutside extends React.Component {
  componentDidMount() {
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if (!this.container.contains(e.target)) {
      if (this.props.onClickOutside) {
        this.props.onClickOutside();
      }
    }
  };

  render() {
    const { children } = this.props;

    return (
      <span ref={el => this.container = el}>
        {children}
      </span>
    );
  }
};
