/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import plusIcon from '../assets/images/plus-icon.png';

import Profile from '../screens/Profile';
import Home from '../screens/Home';

const BottomTab = createBottomTabNavigator();

const BottomTabStack = props => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        //tabStyle: styles.tabBar,
        style: styles.tabBar,
        inactiveTintColor: '#aaa',
        activeTintColor: '#fff',
      }}
      // MSG Custom Tabbar
      // tabBar={props => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={25} color={color} />
          ),
          // MSG Custom Tabbar
          // tabBarIcon: pass imagePath or icon to show,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={Profile}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color}) => (
            <Image source={plusIcon} style={styles.plusIcon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="message-minus-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000',
    height: 60,
  },
  plusIcon: {height: 35, resizeMode: 'contain'},
});

export default BottomTabStack;
