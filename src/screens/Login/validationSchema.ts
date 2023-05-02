import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid email')
    .required("This field can't be empty"),
  password: Yup.string()
    .min(6, 'Password must contain at least 8 character')
    .required("This field can't be empty"),
});

export {validationSchema};
