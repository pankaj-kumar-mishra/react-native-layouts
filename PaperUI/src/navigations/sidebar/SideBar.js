/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useTheme, List, Avatar, Switch} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Linking} from 'react-native';

const SideBar = props => {
  //   console.log('>>Sidebar>>', props);
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <DrawerContentScrollView
      contentContainerStyle={{paddingTop: insets.top}}
      {...props}>
      <List.Item
        title="Pankaj Mishra"
        description="Paper ui with React navigation"
        style={{backgroundColor: colors.surface}}
        left={() => <Avatar.Text label="PM" />}
        right={() => (
          <Switch
            value={isSwitchOn}
            onValueChange={() => setIsSwitchOn(!isSwitchOn)}
          />
        )}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Simplepaper"
        activeTintColor={colors.accent}
        inactiveTintColor="#ccc"
        activeBackgroundColor={colors.surface}
        inactiveBackgroundColor="#000"
        style={{marginHorizontal: 0}}
        labelStyle={{
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.notification,
        }}
        onPress={() => Linking.openURL('http://simplepaper.netlify.app/')}
      />
    </DrawerContentScrollView>
  );
};

export default SideBar;
