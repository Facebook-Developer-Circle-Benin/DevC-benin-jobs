import { useState, ChangeEvent } from 'react';

export interface IUseFormInputReturnProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleUserInput: (
    min?: number,
    max?: number,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
}
export const useFormInput = (
  initialValue: string = '',
): IUseFormInputReturnProps => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(value.length > 0);
  const handleUserInput = (min?: number, max?: number) => (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const {
      target: { name, value },
    } = event;
    const isValid = validateInput(name, value);
    if (max && value.length > max) return;
    if (
      name.toLowerCase() === inputNames.password ||
      name.toLowerCase() === inputNames.email
    ) {
      setValue(value);
      setIsValid(isValid);
      setError(!isValid ? assignError(name) : '');
      return;
    }
    if (!isValid && value !== '') return;
    setValue(value);
    setIsValid(validateLength(value, min, max));
  };
  return { value, setValue, handleUserInput, error, setError, isValid };
};

export enum inputNames {
  email = 'email',
  password = 'password',
  phone = 'phone',
  date = 'date',
  name = 'name',
}

export const errorMessages = {
  email: "Email should contain '@' and at least one '.'",
  password: 'Password must be at least 8 characters',
  phone: 'Incorrect phone number',
  date: 'Invalid date format!',
  name: 'Name must contain only alphabelts',
};

const validateInput = (name: string, key: string): boolean => {
  const regex = {
    email: /^([a-zA-Z\d-\.\_]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{7,}$/,
    phone: /^[0-9\-\(\)\ \+]+$/,
    date: /^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
    text: /^[a-zA-Z\ ]+$/,
    alphanumeric: /^[a-zA-Z0-9\,\ \.\_]+$/g,
    digits: /^\d+$/,
    money: /^\d\.\,+$/g,
  };
  let isValid: boolean;
  switch (name.toLowerCase()) {
    case inputNames.email:
      isValid = validateWithRegex(key, regex.email);
      return isValid;
    case inputNames.name:
      isValid = validateWithRegex(key, regex.text);
      return isValid;
    case inputNames.password:
      isValid = validateWithRegex(key, regex.password);
      return isValid;
    case inputNames.phone:
      isValid = validateWithRegex(key, regex.phone);
      return isValid;
    case inputNames.date:
      isValid = validateWithRegex(key, regex.date);
      return isValid;
    default:
      isValid = validateWithRegex(key, regex.alphanumeric);
      return isValid;
  }
};

const assignError = (name: string): string => {
  switch (name.toLowerCase()) {
    case inputNames.email:
      return errorMessages.email;
    case inputNames.name:
      return errorMessages.name;
    case inputNames.password:
      return errorMessages.password;
    case inputNames.phone:
      return errorMessages.phone;
    case inputNames.date:
      return errorMessages.date;
    default:
      return `${name} is invalid`;
  }
};
const validateWithRegex = (value: string, regex: RegExp): boolean =>
  regex.test(value);

const validateLength = (value: string, min?: number, max?: number) => {
  if (min && max)
    return value.length > 0 && value.length >= min && value.length <= max;
  if (max) return value.length > 0 && value.length <= max;
  if (min) return value.length > 0 && value.length >= min;
  return value.length > 0;
};
