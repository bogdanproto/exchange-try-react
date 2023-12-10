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
  avatar: yup.string(),
  name: yup.string().trim(),
  phone: yup.string().trim(),
  // eqpt: yup.array({
  //   id: yup.string(),
  //   label: yup.string(),
  // }),
});

export const schemaRequestForm = yup.object().shape({
  allday: yup.boolean(),

  spot: yup.object({
    id: yup.string(),
    label: yup.string(),
  }),
});
