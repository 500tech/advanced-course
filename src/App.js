import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/feed/:id?" component={Home} />
          <Route path="*" component={() => (
            <h1>404 page</h1>
          )} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
