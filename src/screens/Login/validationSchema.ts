import {
  regexLowerCase,
  regexUpperCase,
  regexContainNumber,
  regexSpecialCharacter,
} from '@helpers/regex';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Please provide a valid email')
    .required("This field can't be empty"),
  password: Yup.string()
    .matches(regexLowerCase, 'Password must contain a lowercase letter')
    .matches(regexUpperCase, 'Password must contain an uppercase letter')
    .matches(regexContainNumber, 'Password must contain a number')
    .matches(regexSpecialCharacter, 'Password must contain a special character')
    .min(8, 'Password must contain at least 8 character')
    .required("This field can't be empty"),
});

export {validationSchema};
