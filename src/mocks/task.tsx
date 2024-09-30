// import { v4 as uuidv4 } from 'uuid';

import { FaCarBattery } from 'react-icons/fa';

import {
  ITaskAssignee,
  ITaskEstimate,
  ITaskLabel,
  ITaskStatusSections,
} from '@interfaces/app';

import { STATUS_COLUMN_ID } from '@constants/app';

export const ESTIMATES_LIST: ITaskEstimate[] = [
  {
    id: '0',
    value: '0',
    label: '0 Points',
    icon: <FaCarBattery className="h-6 w-6 text-neutral-1" />,
  },
  {
    id: '1',
    value: '1',
    label: '1 Points',
    icon: <FaCarBattery className="h-6 w-6 text-neutral-1" />,
  },
  {
    id: '2',
    value: '2',
    label: '2 Points',
    icon: <FaCarBattery className="h-6 w-6 text-neutral-1" />,
  },
  {
    id: '3',
    value: '4',
    label: '4 Points',
    icon: <FaCarBattery className="h-6 w-6 text-neutral-1" />,
  },
  {
    id: '4',
    value: '8',
    label: '8 Points',
    icon: <FaCarBattery className="h-6 w-6 text-neutral-1" />,
  },
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
          id: '3',
          label: '4 Points',
          value: '4',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: [
          {
            id: '1',
            value: '1',
            label: 'ANDROID',
          },
        ],
        date: new Date(),
      },
      {
        id: 'sdajasjkbaskjasdqaaa',
        title: 'Responsive design',
        points: {
          id: '3',
          label: '4 Points',
          value: '4',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: [
          {
            id: '1',
            value: '1',
            label: 'ANDROID',
          },
        ],
        date: new Date(),
      },
      {
        id: '2000',
        title: 'Responsive design',
        points: {
          id: '3',
          label: '4 Points',
          value: '4',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: [
          {
            id: '1',
            value: '1',
            label: 'ANDROID',
          },
        ],
        date: new Date(),
      },
      {
        id: '20289ehuih00',
        title: 'Responsive design',
        points: {
          id: '3',
          label: '4 Points',
          value: '4',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: [
          {
            id: '1',
            value: '1',
            label: 'ANDROID',
          },
        ],
        date: new Date(),
      },
      {
        id: '2anbqhbhwj378434000',
        title: 'Responsive design',
        points: {
          id: '3',
          label: '4 Points',
          value: '4',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: [
          {
            id: '1',
            value: '1',
            label: 'ANDROID',
          },
        ],
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
          id: '3',
          label: '4 Points',
          value: '4',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: [
          {
            id: '1',
            value: '1',
            label: 'ANDROID',
          },
        ],
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
          id: '4',
          label: '8 Points',
          value: '8',
        },
        member: {
          id: '5',
          name: 'Elene Conway',
          profileUrl:
            'https://robohash.org/veldoloresomnis.png?size=50x50&set=set1',
        },
        labels: [
          {
            id: '1',
            value: '1',
            label: 'ANDROID',
          },
        ],
        date: new Date(),
      },
    ],
  },
];
