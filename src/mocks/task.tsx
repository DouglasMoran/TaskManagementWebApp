import {
  ColumnTaskStatusKeys,
  ColumnTaskStatusValues,
  ITaskStatusSections,
  PopoverType,
  TaskPointEstimate,
  TaskTag,
} from '@interfaces/app';

export const TASK_POINT_ESTIMATES: PopoverType<TaskPointEstimate>[] = [
  {
    label: '0 Points',
    value: 'ZERO',
  },
  {
    label: '1 Points',
    value: 'ONE',
  },
  {
    label: '2 Points',
    value: 'TWO',
  },
  {
    label: '4 Points',
    value: 'FOUR',
  },
  {
    label: '8 Points',
    value: 'EIGHT',
  },
];

export const TASK_STATUS: PopoverType<
  ColumnTaskStatusKeys,
  ColumnTaskStatusValues
>[] = [
  {
    label: 'Backlog',
    value: 'BACKLOG',
  },
  {
    label: 'Todo',
    value: 'TODO',
  },
  {
    label: 'In progress',
    value: 'IN_PROGRESS',
  },
  {
    label: 'Done',
    value: 'DONE',
  },
  {
    label: 'Cancelled',
    value: 'CANCELLED',
  },
];

export const TASK_TAGS: TaskTag[] = [
  'ANDROID',
  'IOS',
  'NODE_JS',
  'RAILS',
  'REACT',
];

export const COLUMN_TASK_STATUS: ITaskStatusSections[] = [
  {
    id: 'BACKLOG',
    title: 'Backlog',
    tasks: [],
  },
  {
    id: 'TODO',
    title: 'Todo',
    tasks: [],
  },
  {
    id: 'IN_PROGRESS',
    title: 'In progress',
    tasks: [],
  },
  {
    id: 'DONE',
    title: 'Done',
    tasks: [],
  },
  {
    id: 'CANCELLED',
    title: 'Cancelled',
    tasks: [],
  },
];
