/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import SearchResultsTopTabStack from './SearchResultsTopTabStack';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      //headerMode="none"
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResultsTopTabStack"
        component={SearchResultsTopTabStack}
        options={{
          title: 'Search Results',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
