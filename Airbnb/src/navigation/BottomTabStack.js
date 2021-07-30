/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeStack from './HomeStack';
import Profile from '../screens/Profile';

const BottomTab = createBottomTabNavigator();

const BottomTabStack = props => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        inactiveTintColor: '#000',
        activeTintColor: '#f15454',
      }}
      // MSG Custom Tabbar
      // tabBar={props => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
          // MSG Custom Tabbar
          // tabBarIcon: pass imagePath or icon to show,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Airbnb"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={35} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;
