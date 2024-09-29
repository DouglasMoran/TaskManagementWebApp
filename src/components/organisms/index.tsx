import { lazy } from 'react';

export const ModulesList = lazy(
  () => import('@components/organisms/ModulesList'),
);
export const Searchbar = lazy(() => import('@components/organisms/Searchbar'));
export const TaskCard = lazy(() => import('@components/organisms/TaskCard'));
export const TaskDialog = lazy(
  () => import('@components/organisms/TaskDialog'),
);
