import React, { useState, useRef, useCallback } from 'react';
import { Omit } from 'react-router';
import { BsEye, BsEyeSlash, BsSearch } from 'react-icons/bs';
import ClipLoader from 'react-spinners/ClipLoader';
import './form.scss';
interface IGlobalProps {
  label?: string;
  err?: string;
  isValid?: boolean;
}

export type InputFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> &
  IGlobalProps & {
    onChange: (
      min?: number,
      max?: number,
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
  };

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  label,
  value,
  onChange,
  err,
  name,
  type,
  className,
  isValid,
  disabled = false,
  min,
  max,
  ...rest
}) => {
  const errRef = useRef<HTMLSpanElement>(null);
  const interact = useCallback((type: 'blur' | 'focus'): void => {
    if (errRef.current) {
      if (type === 'blur') errRef.current.style.display = 'inline';
      if (type === 'focus') errRef.current.style.display = 'none';
    }
  }, []);
  return (
    <label
      className={`d-flex column margin-bottom-sm ${className}`}
      style={{ width: '100%' }}>
      <span className="font-sm font-weight-500 color-dark">{label}</span>
      <div className="d-flex input-container">
        <input
          onBlur={(): void => interact('blur')}
          onFocus={(): void => interact('focus')}
          type={type}
          name={name}
          value={value}
          onChange={onChange(min, max)}
          placeholder={placeholder}
          disabled={disabled}
          className={`form-control border-r-5 padding-vertical-sm padding-horizontal-sm font-sm font-weight-500 ${
            !disabled ? 'bg-white' : 'bg-gray'
          } slim-border font-sm`}
          {...rest}
        />
      </div>
      <span ref={errRef} className="font-xs font-weight-400 color-google">
        {err}
      </span>
    </label>
  );
};

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  inputClassName?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
  name,
  type,
  className,
  containerClassName,
  inputClassName,
  disabled = false,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const interact = useCallback((type: 'blur' | 'focus'): void => {}, []);
  return (
    <label
      className={`d-flex column margin-bottom-sm ${className}`}
      style={{ width: '100%' }}>
      <div
        ref={ref}
        className={`d-flex align-items-center nowrap form-control search-input-container bg-transparent ${containerClassName}`}>
        <button
          type="button"
          className="padding-vertical-xs padding-horizontal-sm padding-right-sm search-btn">
          <BsSearch size={20} className="color-primary-dark" />
        </button>
        <input
          onBlur={(): void => interact('blur')}
          onFocus={(): void => interact('focus')}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`search-field flex-equal padding-vertical-sm padding-horizontal-sm font-sm font-weight-500 ${inputClassName}`}
          {...rest}
        />
      </div>
    </label>
  );
};

export const PasswordField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
  err,
  name,
  className = '',
  min,
  max,
  label,
  ...rest
}) => {
  const [type, setType] = useState<string>('password');
  const errRef = useRef<HTMLSpanElement>(null);
  const interact = useCallback((type: 'blur' | 'focus'): void => {
    if (errRef.current) {
      if (type === 'blur') errRef.current.style.display = 'inline';
      if (type === 'focus') errRef.current.style.display = 'none';
    }
  }, []);
  return (
    <label
      className={`d-flex column margin-bottom-sm ${className}`}
      style={{ width: '100%' }}>
      <span className="font-sm font-weight-500 color-dark">{label}</span>
      <div className="d-flex input-container position-relative">
        <input
          onBlur={(): void => interact('blur')}
          onFocus={(): void => interact('focus')}
          type={type}
          name={name}
          value={value}
          onChange={onChange(min, max)}
          placeholder={placeholder}
          className="form-control border-r-5 padding-vertical-sm padding-horizontal-sm font-sm font-weight-500"
          {...rest}
        />
        <div className="field-check-icon">
          {type === 'password' ? (
            <BsEyeSlash
              className="font-md color-gray fadeIn-animation"
              onClick={(): void => setType('text')}
            />
          ) : (
            <BsEye
              className="font-md color-gray fadeIn-animation"
              onClick={(): void => setType('password')}
            />
          )}
        </div>
      </div>
      <span ref={errRef} className="font-xs font-weight-400 color-google">
        {err}
      </span>
    </label>
  );
};

export interface IUseCheckboxReturnType {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  Checkbox: React.FunctionComponent<{}>;
}

export const useCheckbox = (bool: boolean = false): IUseCheckboxReturnType => {
  const [checked, setChecked] = useState<boolean>(bool);
  const Checkbox: React.FC = (): JSX.Element => {
    return (
      <input
        type="checkbox"
        color="#000"
        checked={checked}
        className="cursor-pointer"
        onChange={(): void => setChecked((prev) => !prev)}
      />
    );
  };
  return { checked, setChecked, Checkbox };
};

export type SubmitButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | 'className'
> & {
  loading?: boolean;
  action: () => void;
  backgroundClassName?: string;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading,
  backgroundClassName = 'bg-primary-light ripple-primary-light',
  children,
  action,
  disabled,
  className,
  ...rest
}) => {
  const preventBeforeFire = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    action();
  };
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={preventBeforeFire}
      style={{ minWidth: '100px' }}
      {...rest}
      className={`submit d-flex flex-center color-white btn margin-bottom-sm ${
        disabled
          ? 'cursor-not-allowed bg-primary-light-opacity'
          : backgroundClassName
      } ${className}`}>
      {!loading ? children : <ClipLoader size={20} color="#fff" loading={loading} />}
    </button>
  );
};
