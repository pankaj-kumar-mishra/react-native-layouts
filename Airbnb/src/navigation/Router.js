/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InitialStack from './InitialStack';

const Router = () => {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
};

export default Router;
