/* eslint-disable prettier/prettier */
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {toggleTheme} from '../../redux/actions/app_A';

const NavHeader = ({scene}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const canGoBack = navigation.canGoBack();
  const route = useRoute();
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const _handleDrawer = () => {
    navigation.openDrawer();
  };

  const _goBack = () => {
    navigation.goBack();
  };

  const _handleSearch = () => {
    navigation.navigate('Search');
  };

  const _handleTheme = () => {
    dispatch(toggleTheme());
  };

  const isMainRoute = () => {
    switch (route.name) {
      case 'Home':
      case 'Settings':
      case 'Profile':
        return true;

      default:
        return false;
    }
  };

  return (
    <Appbar.Header>
      {isMainRoute() ? (
        <Appbar.Action icon="menu" onPress={_handleDrawer} />
      ) : (
        <Appbar.BackAction onPress={_goBack} />
      )}
      <Appbar.Content title={title} />
      {route.name === 'Home' && (
        <Appbar.Action icon="find-replace" onPress={_handleSearch} />
      )}
      <Appbar.Action icon="theme-light-dark" onPress={_handleTheme} />
    </Appbar.Header>
  );
};

export default NavHeader;
