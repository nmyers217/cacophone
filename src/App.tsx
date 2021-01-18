import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import SignInPage from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        {/* TODO: protected route for the main app */}
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        {/* <Route path="/signup"></Route>
        <Route path="/recovery"></Route>
        <Route path="*"></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
