import React from 'react';
import styled from 'styled-components';

const Navigation = () => (
  <Container>
    <Logo>advanced course</Logo>
    <User>hello guest</User>
  </Container>
);

export default Navigation;

const Container = styled.div`
  width: 100vw;
  height: 60px;
  background: #0052da;
  box-sizing: border-box;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
`;

const User = styled.div`
  font-size: 12px;
  color: #fff;
  text-transform: capitalize;
  font-weight: 300;
`;
