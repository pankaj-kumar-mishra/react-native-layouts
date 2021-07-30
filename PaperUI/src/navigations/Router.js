/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import NavAuthHeader from '../components/header/NavAuthHeader';
import Splash from '../screens/public/Splash';
import Signin from '../screens/public/Signin';
import Signup from '../screens/public/Signup';
// MSG BOTTOM TABS
import TabNav from './bottombar/TabNav';
import MaterialTabNav from './bottombar/MaterialTabNav';
import CustomTabNav from './bottombar/CustomTabNav';
import PaperTabNav from './bottombar/PaperTabNav';
// MSG DRAWER TABS
import DrawerNav from './sidebar/DrawerNav';
import CustomDrawerNav from './sidebar/CustomDrawerNav';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
        //headerShown: false,
        header: props => <NavAuthHeader {...props} />,
      }}
      initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerTitle: 'Login',
        }}
        //options={{header: props => <AuthHeader {...props} />}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'Register',
        }}
      />
      {/* PART BOTTTOM TABS */}
      {/* MSG NORMAL BOTTOM TAB */}
      <Stack.Screen
        name="BottomTabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
      {/* MSG MATERIAL BOTTOM TAB */}
      <Stack.Screen
        name="BottomMaterialTabNav"
        component={MaterialTabNav}
        options={{headerShown: false}}
      />
      {/* MSG CUSTOM BOTTOM TAB */}
      <Stack.Screen
        name="BottomCustomTabNav"
        component={CustomTabNav}
        options={{headerShown: false}}
      />
      {/* MSG PAPER BOTTOM TAB */}
      <Stack.Screen
        name="BottomPaperTabNav"
        component={PaperTabNav}
        options={{headerShown: false}}
      />

      {/* PART DRAWER BARS */}
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CustomDrawerNav"
        component={CustomDrawerNav}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="PostInfo"
        component={PostInfo}
        options={{title: 'Accommodation'}}
        // NOTE for Custom Header
        //options={{header: props => <Text>Accommodation</Text>}}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
