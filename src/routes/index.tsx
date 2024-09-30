import { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { ROUTE_PATH } from '@constants/routes-paths';

const NotFound = lazy(() => import('@components/templates/NotFound'));
const LoadingPlaceholder = lazy(
  () => import('@components/templates/LoadingPlaceholder'),
);
const ErrorBoundaryFallback = lazy(
  () => import('@components/templates/ErrorBoundaryFallback'),
);

const DashboardPage = lazy(() => import('@pages/dashboard'));

const AppRouter = () => {
  const { NOT_FOUND, ONBOARDING, DASHBOARD, TASKS } = ROUTE_PATH;

  return (
    <Router>
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryFallback}
        onReset={() => {
          <Navigate to={ONBOARDING} />;
        }}
      >
        <Suspense fallback={<LoadingPlaceholder />}>
          <Routes>
            <Route path={ONBOARDING} element={<Navigate to={DASHBOARD} />} />
            <Route path={DASHBOARD} element={<DashboardPage />} />
            <Route path={TASKS} />
            <Route path={NOT_FOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export { AppRouter };
