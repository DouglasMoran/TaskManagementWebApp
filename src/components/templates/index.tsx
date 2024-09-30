import { lazy } from 'react';

export const ErrorBoundaryFallback = lazy(
  () => import('@components/templates/ErrorBoundaryFallback'),
);
export const LoadingPlaceholder = lazy(
  () => import('@components/templates/LoadingPlaceholder'),
);
export const Navbar = lazy(() => import('@components/templates/Navbar'));
export const Sidebar = lazy(() => import('@components/templates/Sidebar'));
export const TaskBoard = lazy(() => import('@components/templates/TaskBoard'));
export const TaskList = lazy(
  () => import('@components/templates/TaskList/iindex'),
);
