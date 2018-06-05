import React, { Component } from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './redux/store';

// comps
import Navigation from './components/Navigation';
import Feed from './components/Feed';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Navigation />
          <Feed />
        </Container>
      </Provider>
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
