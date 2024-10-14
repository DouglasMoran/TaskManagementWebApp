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
    tasks: [
      // {
      //   id: 'jlkbsdjkbdjkbd',
      //   title: 'Responsive design',
      //   points: {
      //     label: '',
      //     value: 'EIGHT',
      //   },
      //   member: {
      //     id: '5',
      //     name: 'Elene Conway',
      //     profileUrl:
      //       'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
      //   },
      //   labels: ['ANDROID'],
      //   date: new Date(),
      // },
      // {
      //   id: 'sdajasjkbaskjasdqaaa',
      //   title: 'Responsive design',
      //   points: {
      //     label: '',
      //     value: 'EIGHT',
      //   },
      //   member: {
      //     id: '5',
      //     name: 'Elene Conway',
      //     profileUrl:
      //       'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
      //   },
      //   labels: ['IOS', 'ANDROID', 'REACT'],
      //   date: new Date(),
      // },
      // {
      //   id: '2000',
      //   title: 'Responsive design',
      //   points: {
      //     label: '',
      //     value: 'TWO',
      //   },
      //   member: {
      //     id: '5',
      //     name: 'Elene Conway',
      //     profileUrl:
      //       'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
      //   },
      //   labels: ['NODE_JS', 'RAILS'],
      //   date: new Date(),
      // },
      // {
      //   id: '20289ehuih00',
      //   title: 'Responsive design',
      //   points: {
      //     label: '',
      //     value: 'ZERO',
      //   },
      //   member: {
      //     id: '5',
      //     name: 'Elene Conway',
      //     profileUrl:
      //       'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
      //   },
      //   labels: ['REACT'],
      //   date: new Date(),
      // },
      // {
      //   id: '2anbqhbhwj378434000',
      //   title: 'Responsive design',
      //   points: {
      //     label: '',
      //     value: 'EIGHT',
      //   },
      //   member: {
      //     id: '5',
      //     name: 'Elene Conway',
      //     profileUrl:
      //       'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
      //   },
      //   labels: ['ANDROID', 'REACT'],
      //   date: new Date(),
      // },
    ],
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
