import { Provider as StoreProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { AppRouter } from '.';

import { client } from '@api/index';

import store from '@store/index';

const Providers = () => {
  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <AppRouter />
      </StoreProvider>
    </ApolloProvider>
  );
};

export default Providers;
