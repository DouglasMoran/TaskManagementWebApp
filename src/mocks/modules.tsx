import { v4 as uuidv4 } from 'uuid';

import { ModuleItem } from '@interfaces/app';

import { MODULE } from '@constants/app';

import HamburgerMenuIcon from '@utils/icons/HamburgerMenuIcon';
import GridIcon from '@utils/icons/GridIcon';

export const MODULES_LIST: ModuleItem[] = [
  {
    id: uuidv4(),
    name: MODULE.DASHBOARD,
    icon: <GridIcon />,
  },
  {
    id: uuidv4(),
    name: MODULE.MY_TASKS,
    icon: <HamburgerMenuIcon />,
  },
];
