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

export const schemaProposalForm = yup.object().shape({
  allday: yup.boolean().required(),
  date: yup.mixed().required(),
  time: yup.mixed().required(),
  spot: yup.string().required('Spot is required'),
  eqpts: yup
    .array(yup.string().required('Equipment is required'))
    .required('Equipment is required'),
  message: yup.mixed().required(),
  is_phone: yup.boolean().required(),
  auto_accept: yup.boolean().required(),
});

export const schemaOfferForm = yup.object().shape({
  time: yup.mixed().required(),
  eqpts: yup
    .array(yup.string().required('Equipment is required'))
    .required('Equipment is required'),
  message: yup.mixed().required(),
});

export const schemaCancelForm = yup.object().shape({
  message: yup.string().required('Reason for cancellation is required'),
});

export const schemaEqptForm = yup.object().shape({
  title: yup.string().required('Equipment is required'),
  size: yup.string().required('Size is required'),
});
