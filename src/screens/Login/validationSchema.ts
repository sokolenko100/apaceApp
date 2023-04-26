import * as Yup from 'yup';

const EMAIL = Yup.string().email().required();
const PASSWORD = Yup.string().min(8).required();

const validationSchema = Yup.object().shape({
  email: EMAIL,
  password: PASSWORD,
});

export {validationSchema};
