/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, ScrollView, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme, TextInput, Button} from 'react-native-paper';
import {commonStyles} from '../../utils/commonStyles';

const Signin = () => {
  const {height, width} = useWindowDimensions();
  const isLandscape = width > height;
  const {colors} = useTheme();
  const navigation = useNavigation();
  //   const route = useRoute();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _navToHome = () => {
    navigation.reset({
      routes: [{name: 'CustomDrawerNav', params: {from: 'Signin'}}],
    });
  };

  const _navToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={[commonStyles.flex(), commonStyles.paddingHorizontal()]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyles.marginTop(isLandscape ? '2%' : '50%')}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            mode={'outlined'}
            error
            dense
            left={<TextInput.Affix text="@" />}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={text => setPassword(text)}
            mode={'outlined'}
            dense
            right={<TextInput.Icon name={'eye'} color={colors.onSurface} />}
          />
          <Button
            onPress={_navToHome}
            loading={loading}
            mode="contained"
            compact
            style={commonStyles.marginVertical()}>
            Sign in
          </Button>
        </View>
      </ScrollView>
      {/* MSG Footer / Bottom section */}
      <Button
        onPress={_navToSignup}
        uppercase={false}
        compact
        style={commonStyles.margin('1%')}>
        Don't have an account? Signup
      </Button>
    </View>
  );
};

export default Signin;
