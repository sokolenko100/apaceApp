import * as Yup from 'yup';
import {
  regexContainNumber,
  regexLowerCase,
  regexSpecialCharacter,
  regexUpperCase,
} from '@helpers/regex';

const EMAIL = Yup.string()
  .email('Please provide a valid email')
  .required("This field can't be empty");

const PASSWORD = Yup.string()
  .matches(regexLowerCase, 'Password must contain a lowercase letter')
  .matches(regexUpperCase, 'Password must contain an uppercase letter')
  .matches(regexContainNumber, 'Password must contain a number')
  .matches(regexSpecialCharacter, 'Password must contain a special character')
  .min(8, 'Password must contain at least 8 characters')
  .required("This field can't be empty");

export {EMAIL, PASSWORD};
