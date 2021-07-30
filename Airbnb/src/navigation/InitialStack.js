/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import DestinationSearch from '../screens/DestinationSearch';
import Guests from '../screens/Guests';
import BottomTabStack from './BottomTabStack';
import PostInfo from '../screens/PostInfo';
// import {Text} from 'react-native';

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
      <Stack.Screen
        name="DestinationSearch"
        component={DestinationSearch}
        options={{title: 'Search Location'}}
      />
      <Stack.Screen name="Guests" component={Guests} />
      <Stack.Screen
        name="PostInfo"
        component={PostInfo}
        options={{title: 'Accommodation'}}
        // NOTE for Custom Header
        //options={{header: props => <Text>Accommodation</Text>}}
      />
    </Stack.Navigator>
  );
};

export default InitialStack;
