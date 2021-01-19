import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ProvideAuth } from './hooks/useAuth';
import ChatClientPage from './pages/ChatClientPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import RecoveryPage from './pages/RecoveryPage';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <ChatClientPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/recovery">
            <RecoveryPage />
          </Route>
          {/* TODO: 404 page  */}
          {/* <Route path="*"></Route> */}
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
