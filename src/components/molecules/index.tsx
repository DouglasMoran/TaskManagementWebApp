import { lazy } from 'react';

export const ActionButtons = lazy(
  () => import('@components/molecules/ActionButtons'),
);
export const Popover = lazy(() => import('@components/molecules/Popover'));
export const SidebarItem = lazy(
  () => import('@components/molecules/SidebarItem'),
);
export const TaskActionButtons = lazy(
  () => import('@components/molecules/TaskActionButtons'),
);
