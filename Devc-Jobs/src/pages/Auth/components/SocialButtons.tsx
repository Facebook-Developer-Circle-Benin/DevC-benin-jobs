import React, { Fragment } from 'react';
import { SubmitButton } from '../../components';
import { FaFacebookF } from 'react-icons/fa';

export const SocialButtons: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <div className="d-flex align-items-center full-width margin-bottom-xs">
        <div className="flex-equal slim-border-bottom" />
        <span className="color-gray padding-horizontal-sm font-xs">OR</span>
        <div className="flex-equal slim-border-bottom" />
      </div>
      <div className="d-flex align-items-center justify-content-between full-width">
        <SubmitButton
          action={() => null}
          backgroundClassName="bg-facebook"
          className="flex-equal margin-right-sm">
          <div className="d-flex align-items-center">
            <FaFacebookF className="color-white margin-right-sm font-sm" />
            <span className="font-xs font-weight-normal">Log in with facebook</span>
          </div>
        </SubmitButton>
        <SubmitButton
          action={() => null}
          backgroundClassName="bg-google"
          className="flex-equal">
          <span className="font-xs font-weight-normal">Log in with Google</span>
        </SubmitButton>
      </div>
    </Fragment>
  );
};
