import React, { Component } from 'react';
import styled from 'styled-components';

// comps
import Navigation from './components/Navigation';
import Feed from './components/Feed';

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Feed />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

export default App;
