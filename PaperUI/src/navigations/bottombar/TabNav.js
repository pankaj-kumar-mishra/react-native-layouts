/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/private/home/Home';
import Settings from '../../screens/private/settings/Settings';
import Profile from '../../screens/private/profile/Profile';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const {colors, dark} = useTheme();
  //   console.log(dark);

  const [homeBadge, setHomeBadge] = useState(100);
  useEffect(() => {
    setTimeout(() => {
      setHomeBadge(null);
    }, 3000);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      //screenOptions={{}}
      tabBarOptions={{
        activeTintColor: colors.accent,
        inactiveTintColor: '#ccc',
        //activeBackgroundColor: colors.surface,
        //inactiveBackgroundColor: colors.onSurface,
        keyboardHidesTabBar: true,
        tabStyle: {backgroundColor: colors.primary},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={26} />
          ),
          tabBarBadge: homeBadge,
          //tabBarBadgeStyle: {backgroundColor: colors.surface},
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color}) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
