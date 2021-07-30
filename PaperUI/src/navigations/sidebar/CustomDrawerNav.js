/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';
import Settings from '../../screens/private/settings/Settings';
import Profile from '../../screens/private/profile/Profile';
import SideBar from './SideBar';
import NavHeader from '../../components/header/NavHeader';
import HomeNav from '../stack/HomeNav';

const Drawer = createDrawerNavigator();

const CustomDrawerNav = () => {
  const {colors, dark} = useTheme();
  //   console.log(dark);
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 400; //768

  const [homeBadge, setHomeBadge] = useState(100);
  useEffect(() => {
    setTimeout(() => {
      setHomeBadge(null);
    }, 3000);
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="HomeNav"
      //drawerPosition="right"
      //hideStatusBar
      //overlayColor="transparent"
      drawerType={isLargeScreen ? 'permanent' : 'slide'}
      drawerStyle={{
        backgroundColor: colors.primary,
        width: isLargeScreen ? '30%' : '80%',
        //marginTop: '-1%',
      }}
      drawerContentOptions={{
        activeTintColor: colors.accent,
        inactiveTintColor: '#ccc',
        activeBackgroundColor: colors.surface,
        inactiveBackgroundColor: '#000',
        //style: {backgroundColor: 'red'},
        //contentContainerStyle: {width: '100%'},
        itemStyle: {marginHorizontal: 0},
        labelStyle: {fontSize: 16, fontWeight: 'bold'},
      }}
      // MSG Header for all screens
      screenOptions={{
        headerShown: true,
        header: props => <NavHeader {...props} />,
      }}
      drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          title: 'Dashboard',
          drawerIcon: ({color}) => (
            <Ionicons name="home" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          //drawerLabel: () => null,
          drawerIcon: ({color}) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'My Profile',
          headerTitle: 'My Profile',
          drawerIcon: ({color}) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNav;
