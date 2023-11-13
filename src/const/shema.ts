import * as yup from 'yup';

export const schemaLoginForm = yup.object({
  email: yup
    .string()
    .email('Email must be a valid')
    .required('Email is required')
    .trim(),
  password: yup.string().required('Password is required').trim(),
});

export const schemaSigninForm = yup.object({
  name: yup.string().required('Name is required').trim(),
  email: yup
    .string()
    .email('Email must be a valid')
    .required('Email is required')
    .trim(),
  password: yup.string().required('Password is required').trim(),
});
