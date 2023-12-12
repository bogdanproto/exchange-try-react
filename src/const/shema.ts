import * as yup from 'yup';

export const schemaLoginForm = yup.object({
  email: yup
    .string()
    .email('Email must be a valid')
    .required('Email is required')
    .trim(),
  password: yup.string().required('Password is required').trim(),
});

export const schemaSignupForm = yup.object({
  name: yup.string().required('Name is required').trim(),
  email: yup
    .string()
    .email('Email must be a valid')
    .required('Email is required')
    .trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
    .trim(),
});

export const schemaProfileForm = yup.object().shape({
  name: yup.string().trim().min(2, 'Name must be 2 symbol at least'),
  phone: yup.string().trim().min(3, 'Phone must be 3 symbol at least'),
});

export const schemaRequestForm = yup.object().shape({
  allday: yup.boolean(),

  spot: yup.object({
    id: yup.string(),
    label: yup.string(),
  }),
});

export const schemaEqptForm = yup.object().shape({
  title: yup.string().required('Equipment is required'),
  size: yup.string().required('Size is required'),
});
