import React from 'react';
import styled from 'styled-components';

export default class Toggle extends React.Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isActive);
      }
    });
  };

  render() {
    const { isActive } = this.state;

    return (
      <Container onClick={this.handleClick} isActive={isActive}>
        <Inner isActive={isActive} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  transition: all 300ms;
  background: ${({ isActive }) => isActive ? '#0052da' : '#e6e6e6'};
  position: relative;
  cursor: pointer;
  transform: scale(0.7);
`;

const Inner = styled.div`
  position: absolute;
  top: 2px;
  transition: all 300ms;
  left: ${({ isActive }) => isActive ? 'calc(100% - 28px)' : '2px'};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ isActive }) => isActive ? '#fff' : '#0052da'};
`;
