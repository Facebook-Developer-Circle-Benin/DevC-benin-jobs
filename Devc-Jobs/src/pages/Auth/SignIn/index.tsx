import React from 'react';
import { Link } from 'react-router-dom';
//import { FaFacebookF } from 'react-icons/fa';
import {
  InputField,
  useFormInput,
  inputNames,
  useCheckbox,
  PasswordField,
  SubmitButton,
} from '../../components';
import '../auth.scss';
import SignInImage from '../assets/signin.png';
import { AuthCardWrapper, SocialButtons } from '../components';
const SignIn: React.FC = (): JSX.Element => {
  const {
    value: email,
    handleUserInput: setEmail,
    error: emailErr,
    isValid: emailIsValid,
  } = useFormInput();
  const { value: password, handleUserInput: setPassword } = useFormInput();
  const { Checkbox, checked, setChecked } = useCheckbox();
  const validateAllInputs: boolean = password.length >= 8 && emailIsValid && checked;
  return (
    <AuthCardWrapper>
      <div className="auth-image">
        <img src={SignInImage} alt="Workspace" />
      </div>
      <form className="form-fields padding-lg bg-white overflow-y-auto">
        <div className="margin-bottom-sm full-width">
          <h1 className="font-lg font-weight-normal color-primary-dark capitalize">
            welcome back
          </h1>
          <h2 className="font-sm font-weight-normal line-height-24 color-gray">
            Enter your email and password to access account
          </h2>
        </div>
        <InputField
          type="email"
          value={email}
          name={inputNames.email}
          onChange={setEmail}
          placeholder="example@gmail.com"
          err={emailErr}
          label="Email"
        />
        <PasswordField
          value={password}
          name={inputNames.password}
          onChange={setPassword}
          placeholder="at least 8 characters"
          label="Password"
        />
        <div className="d-flex align-items-center justify-content-between full-width margin-bottom-sm">
          <div className="d-flex align-items-center">
            <Checkbox />
            <button
              type="button"
              onClick={(e): void => setChecked((prev) => !prev)}
              className="margin-left-sm font-sm family-roboto color-gray">
              Remember me
            </button>
          </div>
          <Link to="/forgot-password" className="font-sm family-roboto color-gray">
            Forgot Password
          </Link>
        </div>
        <SubmitButton
          disabled={!validateAllInputs}
          action={() => null}
          className="full-width">
          <span>Log In</span>
        </SubmitButton>
        <SocialButtons />
        <div className="d-flex align-items-center flex-center font-xs font-weight-500">
          <span className="color-gray margin-right-sm">
            Don't have an account with us?
          </span>
          <Link to="/signup" className="color-primary-light">
            Sign Up
          </Link>
        </div>
      </form>
    </AuthCardWrapper>
  );
};

export default SignIn;
