import { object, string, array, date } from 'yup';

export const validationTaskSchema = object({
  name: string().required('Title is required'),
  pointEstimate: object({
    label: string().required('Points label is required'),
    value: string().required('Points value is required'),
  }).required(),
  assignee: object({
    id: string().required('User ID is required'),
    fullName: string().required('User name is required'),
    type: string().required('User type is required'),
    avatar: string().url('Invalid profile URL').notRequired().nullable(),
    email: string().email('Invalid user email').required(),
  }).required(),
  tags: array()
    .of(string())
    .min(1, 'At least one label is required')
    .required(),
  date: date().required('Date is required'),
});
