import { AiOutlineMenu } from 'react-icons/ai';
import { MdGridView } from 'react-icons/md';

import { ModuleItem } from '@interfaces/app';

import { MODULE, TASK_VIEW } from '@constants/app';

export const MODULES_LIST: ModuleItem[] = [
  {
    id: TASK_VIEW.BOARD,
    name: MODULE.DASHBOARD,
    icon: <AiOutlineMenu />,
  },
  {
    id: TASK_VIEW.LIST,
    name: MODULE.MY_TASKS,
    icon: <MdGridView />,
  },
];
