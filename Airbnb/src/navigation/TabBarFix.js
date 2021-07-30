/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Pressable, StyleSheet, Keyboard} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const TabBarFix = props => {
  const {navigation, activeTintColor, inactiveTintColor} = props;

  const [active, setActive] = useState(0);
  const [isKeyBoardActive, setIsKeyBoradActive] = useState(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyBoradActive(true);
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyBoradActive(false);
    });
    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  const tabLists = [
    {
      iconA: <Fontisto name="search" size={25} color={activeTintColor} />,
      iconI: <Fontisto name="search" size={25} color={inactiveTintColor} />,
      linkTo: () => navToScreen('Home', 0),
    },
    {
      iconA: <FontAwesome name="heart-o" size={25} color={activeTintColor} />,
      iconI: <FontAwesome name="heart-o" size={25} color={inactiveTintColor} />,
      linkTo: () => navToScreen('Home', 1),
    },
    {
      iconA: <FontAwesome5 name="airbnb" size={35} color={activeTintColor} />,
      iconI: <FontAwesome5 name="airbnb" size={35} color={inactiveTintColor} />,
      linkTo: () => navToScreen('DestinationSearch', 2),
    },
    {
      iconA: (
        <Feather name="message-square" size={25} color={activeTintColor} />
      ),
      iconI: (
        <Feather name="message-square" size={25} color={inactiveTintColor} />
      ),
      linkTo: () => navToScreen('Home', 3),
    },
    {
      iconA: <EvilIcons name="user" size={35} color={activeTintColor} />,
      iconI: <EvilIcons name="user" size={35} color={inactiveTintColor} />,
      linkTo: () => navToScreen('Guests', 4),
    },
  ];

  const navToScreen = (name, index) => {
    setActive(index);
    navigation.navigate(name);
  };

  return (
    <View style={styles.cover}>
      {!isKeyBoardActive &&
        tabLists.map((item, index) => {
          return (
            <Pressable onPress={item.linkTo} key={index} style={styles.tab}>
              {active === index ? item.iconA : item.iconI}
            </Pressable>
          );
        })}
    </View>
  );
};

export default TabBarFix;

const styles = StyleSheet.create({
  tab: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
  },
});
