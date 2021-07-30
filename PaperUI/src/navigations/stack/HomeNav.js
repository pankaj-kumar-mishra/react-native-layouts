/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../../screens/private/home/Home';
import Search from '../../screens/private/home/Search';
import NavHeader from '../../components/header/NavHeader';

const Stack = createStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
        //headerShown: false,
        header: props => <NavHeader {...props} />,
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        //options={{headerShown: false}}
      />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default HomeNav;
