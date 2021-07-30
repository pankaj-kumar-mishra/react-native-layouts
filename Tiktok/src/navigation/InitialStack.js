/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import BottomTabStack from './BottomTabStack';

const Stack = createStackNavigator();

const InitialStack = props => {
  return (
    <Stack.Navigator
      //headerMode="none"
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
      initialRouteName="BottomTabStack">
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default InitialStack;
