import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import { SignIn, SignUp, LandingPage } from './pages';
import { routeNames } from './pages/types';
const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={LandingPage} />
        <Route path={`/${routeNames.signin}`} component={SignIn} />
        <Route path={`/${routeNames.signup}`} component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
