import { STATUS_COLUMN_ID } from '@constants/app';
import {
  ITaskAssignee,
  ITaskLabel,
  ITaskStatusSections,
  TaskPointEstimate,
  PopoverType,
  TaskStatus,
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

export const TASK_TAGS: TaskTag[] = [
  'ANDROID',
  'IOS',
  'NODE_JS',
  'RAILS',
  'REACT',
];

export const TASK_STATUS: TaskStatus[] = [
  'BACKLOG',
  'TODO',
  'IN_PROGRESS',
  'DONE',
  'CANCELLED',
];

export const ASSIGNEE_LIST: ITaskAssignee[] = [
  {
    id: '1',
    name: 'Pinchas Everleigh',
    profileUrl:
      'https://robohash.org/doloremdolorumquasi.png?size=50x50&set=set1',
  },
  {
    id: '2',
    name: 'Allyn Jephcote',
    profileUrl:
      'https://robohash.org/quidolorumrepellat.png?size=50x50&set=set1',
  },
  {
    id: '3',
    name: 'Ashia Longfellow',
    profileUrl:
      'https://robohash.org/voluptatemutfugiat.png?size=50x50&set=set1',
  },
  {
    id: '4',
    name: 'Teddie Ashford',
    profileUrl: 'https://robohash.org/eaqueutmolestias.png?size=50x50&set=set1',
  },
  {
    id: '5',
    name: 'Elene Conway',
    profileUrl: 'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
  },
  {
    id: '6',
    name: 'Lilllie Spykins',
    profileUrl:
      'https://robohash.org/numquamremofficiis.png?size=50x50&set=set1',
  },
  {
    id: '7',
    name: 'Romola Franklen',
    profileUrl:
      'https://robohash.org/cumconsequaturnecessitatibus.png?size=50x50&set=set1',
  },
  {
    id: '8',
    name: 'Moyra Vignal',
    profileUrl:
      'https://robohash.org/molestiaesedoccaecati.png?size=50x50&set=set1',
  },
  {
    id: '9',
    name: 'Humberto Gray',
    profileUrl:
      'https://robohash.org/quamipsuminventore.png?size=50x50&set=set1',
  },
  {
    id: '10',
    name: 'Gilbertine Ashplant',
    profileUrl:
      'https://robohash.org/occaecatifacereipsam.png?size=50x50&set=set1',
  },
];

export const LABEL_LIST: ITaskLabel[] = [
  {
    id: '0',
    value: '0',
    label: 'IOS',
  },
  {
    id: '1',
    value: '1',
    label: 'ANDROID',
  },
];

export const STATUS_SECTIONS_LIST: ITaskStatusSections[] = [
  {
    id: STATUS_COLUMN_ID.WORKING,
    title: 'Working',
    tasks: [
      {
        id: 'jlkbsdjkbdjkbd',
        title: 'Responsive design',
        points: {
          label: '',
          value: 'EIGHT',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: ['ANDROID'],
        date: new Date(),
      },
      {
        id: 'sdajasjkbaskjasdqaaa',
        title: 'Responsive design',
        points: {
          label: '',
          value: 'EIGHT',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: ['IOS', 'ANDROID', 'REACT'],
        date: new Date(),
      },
      {
        id: '2000',
        title: 'Responsive design',
        points: {
          label: '',
          value: 'TWO',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: ['NODE_JS', 'RAILS'],
        date: new Date(),
      },
      {
        id: '20289ehuih00',
        title: 'Responsive design',
        points: {
          label: '',
          value: 'ZERO',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: ['REACT'],
        date: new Date(),
      },
      {
        id: '2anbqhbhwj378434000',
        title: 'Responsive design',
        points: {
          label: '',
          value: 'EIGHT',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: ['ANDROID', 'REACT'],
        date: new Date(),
      },
    ],
  },
  {
    id: STATUS_COLUMN_ID.IN_PROGRESS,
    title: 'In progress',
    tasks: [
      {
        id: '2000',
        title: 'Responsive design',
        points: {
          label: '',
          value: 'FOUR',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: ['IOS', 'REACT', 'ANDROID'],
        date: new Date(),
      },
    ],
  },
  {
    id: STATUS_COLUMN_ID.COMPLETED,
    title: 'Completed',
    tasks: [
      {
        id: '3000',
        title: 'Drag and Drop Feature',
        points: {
          label: '',
          value: 'ONE',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: ['NODE_JS'],
        date: new Date(),
      },
    ],
  },
];
