/* eslint-disable prettier/prettier */
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {toggleTheme} from '../../redux/actions/app_A';

const NavAuthHeader = ({scene}) => {
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

  const _goBack = () => {
    navigation.goBack();
  };

  const _handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Appbar.Header>
      {route.name !== 'Signin' && <Appbar.BackAction onPress={_goBack} />}
      <Appbar.Content title={title} />
      <Appbar.Action icon="theme-light-dark" onPress={_handleTheme} />
    </Appbar.Header>
  );
};

export default NavAuthHeader;
