import { lazy } from 'react';

export const WebBrowserLayout = lazy(
  () => import('@pages/dashboard/layouts/WebBrowserLayout'),
);
export const AndroidLayout = lazy(
  () => import('@pages/dashboard/layouts/AndroidLayout'),
);
