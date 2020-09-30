import React from 'react';
import whiteLogo from '../../assets/white-logo.png';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="bg-primary-dark color-gray font-weight-400 padding-horizontal-lg padding-vertical-md d-flex column flex-center">
      <div className="logo margin-bottom-md">
        <img src={whiteLogo} alt="logo" />
      </div>
      <div className="padding-bottom-md slim-border-bottom">
        <p className="text-content text-center">
          Proudly an Open Source Project by the Developers’ Circles, Benin.
        </p>
      </div>
      <p className="margin-vertical-md">Terms & Privacy</p>
      <p className="margin-vertical-md">DevC Jobs. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
