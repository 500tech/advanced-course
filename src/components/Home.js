import React from 'react';
import styled from 'styled-components';

import Navigation from './common/Navigation';
import Feed from './Feed';

const Home = () => (
  <Container>
    <Navigation />
    <Feed />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

export default Home;
