import React from 'react';
import styled from 'styled-components';

const withSpinner = (Component) => (props) => (
  <Container>
    <Component {...props} />
    {props.isLoading && (
      <Spinner><SpinnerInner>loading...</SpinnerInner></Spinner>
    )}
  </Container>
);

export default withSpinner;

const Container = styled.div`
  position: relative;
`;

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerInner = styled.div`
  font-size: 20px;
  color: #000;
  text-transform: uppercase;
`;
