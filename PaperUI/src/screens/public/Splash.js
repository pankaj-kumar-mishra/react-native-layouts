/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
  useNavigation,
  //useTheme as useNavigationTheme,
} from '@react-navigation/native';
import {
  Card,
  ActivityIndicator,
  useTheme as usePaperTheme,
} from 'react-native-paper';
import {commonStyles} from '../../utils/commonStyles';

const Splash = () => {
  const navigation = useNavigation();
  const {colors} = usePaperTheme();
  //   const {colors} = useNavigationTheme();

  const navToScreen = (screenName = 'Signin') => {
    navigation.reset({
      routes: [{name: screenName, params: {from: 'Splash'}}],
    });

    // NOTE SHOW FIRST SIGNUP SCREEN THEN BACK CLICK IT WILL SHOOW SIGNIN SCREEN
    // navigation.reset({
    //   index: 1,
    //   routes: [{name: 'Signin'}, {name: 'Signup', params: {from: 'Splash'}}],
    // });
  };

  useEffect(() => {
    setTimeout(() => {
      navToScreen();
    }, 1000);
  }, []);

  return (
    <View style={[commonStyles.vhCenter()]}>
      <Card
        elevation={5}
        style={[commonStyles.width('30%'), {backgroundColor: colors.primary}]}>
        <Card.Content>
          <ActivityIndicator animating={true} color={colors.accent} />
        </Card.Content>
      </Card>
    </View>
  );
};

export default Splash;
