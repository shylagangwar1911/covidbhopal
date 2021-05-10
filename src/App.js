import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Hospital from './pages/Hospital';
import Resources from './pages/Resources';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hospital">
            <Hospital />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
