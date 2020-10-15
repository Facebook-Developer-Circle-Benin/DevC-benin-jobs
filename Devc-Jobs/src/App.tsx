import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import { SignIn, SignUp } from './pages';
import { routeNames } from './pages/types';
import Profile from './pages/Profile/profileApp';
import  GuestOnly from './pages/Profile/EmployeeProfile/GuestOnly/GuestOnly';
const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
      <Route path = "/profile2" exact render = {() => ( <GuestOnly/>)}/>
      <Route path = "/profile1" exact render = {() => ( <Profile/>)}/>
        <Route path={`/${routeNames.signin}`} component={SignIn} />
        <Route path={`/${routeNames.signup}`} component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
