import { Provider as StoreProvider } from 'react-redux';

import { AppRouter } from '.';

import store from '@store/index';

const Providers = () => {
  return (
    <StoreProvider store={store}>
      <AppRouter />
    </StoreProvider>
  );
};

export default Providers;
