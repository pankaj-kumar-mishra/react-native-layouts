/* eslint-disable prettier/prettier */
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

  // Whitelist for store data for next reload
  // blackList for not storeing data

  whitelist: ['app_R'],
  blacklist: ['auth_R'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [thunk];

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);

export default store;
