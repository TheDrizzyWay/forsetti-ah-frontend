// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';

export const checkInputValues = ({
  firstname, lastname, username, password, email
}) => {
  const errorMessages = {};
  if (validator.isEmpty(firstname)) {
    errorMessages.firstnameError = 'Firstname is required';
  }
  if (validator.isEmpty(lastname)) {
    errorMessages.lastnameError = 'Lastname is required';
  }
  if (validator.isEmpty(username)) {
    errorMessages.usernameError = 'Username is required';
  }
  if (!validator.matches(username, /^(?=.*[a-zA-Z])(?=.*[0-9])/i)) {
    errorMessages.usernameError = 'Username must be alphanumeric';
  }
  if (validator.isEmpty(email)) {
    errorMessages.emailError = 'Email is required';
  }
  if (!validator.isEmail(email)) {
    errorMessages.emailError = 'Email is invalid';
  }
  if (validator.isEmpty(password)) {
    errorMessages.passwordError = 'Password is required';
  }
  if (!validator.isLength(password, { min: 8 })) {
    errorMessages.passwordError = 'Password should be more than 8 characters';
  }
  if (!validator.matches(password, /^(?=.*[a-zA-Z])(?=.*[0-9])/i)) {
    errorMessages.passwordError = 'Password must be alphanumeric';
  }
  return errorMessages;
};

export const clearErrorMessages = () => ({
  firstnameError: '',
  lastnameError: '',
  usernameError: '',
  emailError: '',
  passwordError: ''
});
