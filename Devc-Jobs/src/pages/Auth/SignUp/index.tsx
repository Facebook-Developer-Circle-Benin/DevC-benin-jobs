import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  InputField,
  useFormInput,
  inputNames,
  useCheckbox,
  PasswordField,
  SubmitButton,
} from '../../components';
import '../auth.scss';
import SignUpImage from '../assets/signup.png';
import { AuthCardWrapper, SocialButtons } from '../components';
const SignUp: React.FC = (): JSX.Element => {
  const {
    value: email,
    handleUserInput: setEmail,
    error: emailErr,
    isValid: emailIsValid,
  } = useFormInput();
  const {
    value: fullName,
    handleUserInput: setFullName,
    isValid: fullNameIsValid,
  } = useFormInput();
  const {
    value: adminId,
    handleUserInput: setAdminId,
    isValid: adminIdIsValid,
  } = useFormInput();
  const {
    value: password,
    handleUserInput: setPassword,
    error: passwordErr,
    isValid: passwordIsValid,
  } = useFormInput();
  const {
    value: confirmPass,
    handleUserInput: setConfirmPass,
    error: confirmPassErr,
    setError,
  } = useFormInput();
  useEffect(() => {
    confirmPass && confirmPass !== password
      ? setError('Password mismatch')
      : setError('');
  }, [confirmPass, password]);
  const { Checkbox, checked, setChecked } = useCheckbox();
  const validateAllInputs: boolean =
    fullNameIsValid &&
    adminIdIsValid &&
    emailIsValid &&
    passwordIsValid &&
    password === confirmPass;
  return (
    <AuthCardWrapper>
      <div className="auth-image">
        <img src={SignUpImage} alt="Workspace" />
      </div>
      <form className="form-fields padding-lg bg-white overflow-y-auto">
        <div className="margin-bottom-sm full-width">
          <h1 className="font-lg font-weight-normal color-primary-dark capitalize">
            Connect great talents with top organizations
          </h1>
          <h2 className="font-sm font-weight-normal line-height-24 color-gray">
            Create a profile to stay connected with the 1,000+ graduates and
            potential employers
          </h2>
        </div>
        <InputField
          value={fullName}
          name={inputNames.name}
          onChange={setFullName}
          placeholder="e.g John Doe"
          label="Full Name"
        />
        <div className="d-flex full-width">
          <InputField
            type="email"
            value={email}
            name={inputNames.email}
            onChange={setEmail}
            placeholder="example@gmail.com"
            err={emailErr}
            label="Email"
            className="flex-equal-break-md margin-right-sm"
          />
          <InputField
            value={adminId}
            name="Admin ID"
            onChange={setAdminId}
            placeholder="e.g: ADM-000"
            label="Admin ID"
            className="flex-equal"
          />
        </div>
        <div className="d-flex full-width">
          <PasswordField
            value={password}
            name={inputNames.password}
            onChange={setPassword}
            placeholder="at least 8 characters"
            label="Password"
            className="flex-equal-break-md margin-right-sm"
            err={passwordErr}
          />
          <PasswordField
            value={confirmPass}
            name={inputNames.password}
            onChange={setConfirmPass}
            placeholder="at least 8 characters"
            label="Confirm Password"
            className="flex-equal"
            err={confirmPassErr}
          />
        </div>
        <div className="d-flex align-items-center full-width margin-bottom-sm">
          <Checkbox />
          <button
            type="button"
            onClick={(e): void => setChecked((prev) => !prev)}
            className="margin-left-sm margin-right-xs font-sm family-roboto color-gray">
            I agree to the
          </button>
          <Link
            to="/terms-policy"
            className="font-xs family-roboto color-primary-light">
            Terms Policy Conditions
          </Link>
        </div>
        <SubmitButton
          disabled={!validateAllInputs}
          action={() => null}
          className="full-width">
          <span>Sign Up</span>
        </SubmitButton>
        <SocialButtons />
        <div className="d-flex align-items-center flex-center font-xs font-weight-500">
          <span className="color-gray margin-right-sm">
            Already have an account?
          </span>
          <Link to="/signin" className="color-primary-light">
            Sign in
          </Link>
        </div>
      </form>
    </AuthCardWrapper>
  );
};

export default SignUp;
