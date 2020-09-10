import React from 'react';

export const AuthCardWrapper: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="d-flex flex-center fullscreen">
      <section className="auth-card border-r-sm">{children}</section>
    </div>
  );
};
