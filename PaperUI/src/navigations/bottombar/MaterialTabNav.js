/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/private/home/Home';
import Settings from '../../screens/private/settings/Settings';
import Profile from '../../screens/private/profile/Profile';

const MaterialTab = createMaterialBottomTabNavigator();

const MaterialTabNav = () => {
  const {colors, dark} = useTheme();
  //   console.log(dark);
  return (
    <MaterialTab.Navigator
      initialRouteName="Home"
      activeColor={colors.accent}
      inactiveColor={'#ccc'}
      barStyle={{backgroundColor: colors.primary}}
      //screenOptions={{tabBarBadge: 10}}
    >
      <MaterialTab.Screen
        name="Home"
        component={Home}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({color}) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
          tabBarBadge: 1,
        }}
      />
      <MaterialTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
    </MaterialTab.Navigator>
  );
};

export default MaterialTabNav;
