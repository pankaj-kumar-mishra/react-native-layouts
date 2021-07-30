/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/private/home/Home';
import Settings from '../../screens/private/settings/Settings';
import Profile from '../../screens/private/profile/Profile';
import TabBar from './TabBar';
import {useTheme} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const CustomTabNav = () => {
  const {colors} = useTheme();
  const [profileBadge, setProfileBadge] = useState(100);
  useEffect(() => {
    setTimeout(() => {
      setProfileBadge(null);
    }, 3000);
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'My Settings',
          tabBarIcon: 'settings',
          //tabBarVisible: false,//on settings screen active disable the tababar
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: 'person',
          tabBarBadge: profileBadge,
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomTabNav;
