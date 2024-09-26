import { ModuleItem } from '@interfaces/app';

import { MODULE, TASK_VIEW } from '@constants/app';

import HamburgerMenuIcon from '@utils/icons/HamburgerMenuIcon';
import GridIcon from '@utils/icons/GridIcon';

export const MODULES_LIST: ModuleItem[] = [
  {
    id: TASK_VIEW.BOARD,
    name: MODULE.DASHBOARD,
    icon: <GridIcon />,
  },
  {
    id: TASK_VIEW.LIST,
    name: MODULE.MY_TASKS,
    icon: <HamburgerMenuIcon />,
  },
];
