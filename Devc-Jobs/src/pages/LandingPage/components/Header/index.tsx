import React from 'react';
import { Link } from 'react-router-dom';
import { routeNames } from '../../../types';
import primaryLogo from '../../assets/primary-logo.png';
import rectangle from '../../assets/rectangle.png';
export const Header: React.FC = (): JSX.Element => {
  return (
    <header className="d-flex bg-white padding-bottom-lg">
      <div className="padding-md flex-equal">
        <img src={primaryLogo} alt="logo" className="logo" />
        <div className="margin-top-lg">
          <h1 className="font-weight-400 font-lg family-gothic">
            Get gigs and jobs
          </h1>
          <h2 className="font-weight-400 font-lg family-gothic margin-bottom-md">
            Hire Talent
          </h2>
          <Link
            to={`/${routeNames.signup}`}
            className="btn-primary ripple-primary-dark font-sm">
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex-equal splash-rectangle">
        <img src={rectangle} alt="splash" />
      </div>
    </header>
  );
};
