/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme, Badge} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {commonStyles} from '../../utils/commonStyles';

const TabBar = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.tabbar, commonStyles.backgroundColor(colors.primary)]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const iconName = options.tabBarIcon;
        const badgeCount = options.tabBarBadge;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
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
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={commonStyles.vhCenter()}>
            <Badge visible={badgeCount ? true : false} style={styles.badge}>
              {badgeCount}
            </Badge>
            <Ionicons
              name={iconName}
              color={isFocused ? colors.accent : '#ccc'}
              size={24}
            />
            <Text
              style={commonStyles.color(isFocused ? colors.accent : '#ccc')}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    paddingVertical: '1%',
  },
  badge: {position: 'absolute', top: 0, right: '25%'},
});
