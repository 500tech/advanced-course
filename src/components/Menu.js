import React from 'react';
import styled from 'styled-components';

import WithClickOutside from './withClickOut';

class Menu extends React.Component {
  state = {
    isOpen: false
  };

  menuRenderer() {
    return (
      <MenuContainer>
        <Item>user settings</Item>
        <Item>share feed</Item>
        <Item>logout</Item>
      </MenuContainer>
    );
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <WithClickOutside onClickOutside={this.handleClickOutside}>
        <Container>
        <span onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          {children}
        </span>
          {isOpen && this.menuRenderer()}
        </Container>
      </WithClickOutside>
    );
  }
}

export default Menu;

const Container = styled.div`
  position: relative;
`;

const MenuContainer = styled.div`
  position: absolute;
  width: 140px;
  background: #fff;
  min-height: 40px;
  box-sizing: border-box;
  left: 0;
  top: calc(100% + 10px);
  border-radius: 4px;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #444;
  text-transform: capitalize;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  
  &:last-child {
    border: none;
  }
`;
