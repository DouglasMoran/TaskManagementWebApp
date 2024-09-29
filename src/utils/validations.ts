import { object, string, array, number, date } from 'yup';

export const validationTaskSchema = object({
  title: string().required('Title is required'),
  points: object({
    id: string().required('Points ID is required'),
    label: string().required('Points label is required'),
    value: string().required('Points value is required'),
  }).required(),
  member: object({
    id: number().required('Member ID is required'),
    name: string().required('Member name is required'),
    profileUrl: string()
      .url('Invalid profile URL')
      .required('Profile URL is required'),
  }).required(),
  labels: array()
    .of(
      object({
        id: string().required('Label ID is required'),
        value: string().required('Label value is required'),
        label: string().required('Label name is required'),
      }),
    )
    .min(1, 'At least one label is required')
    .required(),
  date: date().required('Date is required'),
});
