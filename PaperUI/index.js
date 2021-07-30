/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
// MSG REDUX
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './src/redux/store';
import App from './App';
import {name as appName} from './app.json';

const persistedStore = persistStore(store);

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <App />
      </PersistGate>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
