import * as Yup from 'yup';
import {EMAIL} from '@helpers/validators';

const validationSchema = Yup.object().shape({
  email: EMAIL,
  password: Yup.string()
    .min(8, 'Password must contain at least 8 character')
    .required("This field can't be empty"),
});

export {validationSchema};
