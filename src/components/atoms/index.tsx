import { lazy } from 'react';

export const Avatar = lazy(() => import('@components/atoms/Avatar'));
export const Badge = lazy(() => import('@components/atoms/Badge'));
export const Button = lazy(() => import('@components/atoms/Button'));
export const Calendar = lazy(() => import('@components/atoms/Calendar'));
export const IconButton = lazy(() => import('@components/atoms/IconButton'));
export const MainContainer = lazy(
  () => import('@components/atoms/MainContainer'),
);
export const ToggleButton = lazy(
  () => import('@components/atoms/ToggleButton'),
);
