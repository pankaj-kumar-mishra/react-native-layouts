/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Keyboard, Pressable, Text} from 'react-native';

const TabBar = ({state, descriptors, navigation}) => {
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      console.log('Keyboard On');
      setIsKeyboardActive(true);
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      console.log('Keyboard OFF');
      setIsKeyboardActive(false);
    });
    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return (
    <>
      {!isKeyboardActive && (
        <View style={styles.cover}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const tabIcon = options.tabBarIcon;
            const isFocused = state.index === index;

            {
              /* console.log('>>Options>>', options);
            console.log('>>State>>', state);
            console.log('>>Descriptors>>', descriptors); */
            }

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <Pressable
                key={index}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.item}>
                <Text style={styles.text(isFocused)}>{label}</Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  cover: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: isFocused => ({
    color: isFocused ? '#f15454' : '#000',
  }),
  imageIcon: isFocused => ({
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: isFocused ? '#1e969c' : '#3E494E',
  }),
  item: {
    width: '20%',
    alignItems: 'center',
    elevation: 10,
    zIndex: 10,
  },
});
