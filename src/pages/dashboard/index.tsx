import { isAndroid, isBrowser } from 'react-device-detect';

import { WebBrowserLayout, AndroidLayout } from '@pages/dashboard/layouts';

const Dashboard = () => {
  return (
    <>
      {isBrowser && <WebBrowserLayout />}
      {isAndroid && <AndroidLayout />}
      {/* Here will be added iOS Layout */}
    </>
  );
};

export default Dashboard;
