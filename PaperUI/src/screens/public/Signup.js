/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme, TextInput, Button} from 'react-native-paper';
import {commonStyles} from '../../utils/commonStyles';

const Signup = () => {
  const {height, width} = useWindowDimensions();
  const isLandscape = width > height;
  const {colors} = useTheme();
  const navigation = useNavigation();
  //   const route = useRoute();

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  //   useEffect(() => {

  //   }, []);

  const _navToHome = () => {
    navigation.reset({
      routes: [{name: 'BottomTabNav', params: {from: 'Signup'}}],
    });
  };

  const _navToSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={[commonStyles.flex(), commonStyles.paddingHorizontal()]}>
      <View />
      {/* MSG Content / Middle Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyles.marginTop(isLandscape ? '2%' : '40%')}>
          <TextInput
            label="First Name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
            mode={'outlined'}
            dense
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={text => setLastName(text)}
            mode={'outlined'}
            dense
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            mode={'outlined'}
            error
            dense
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
          <TextInput
            label="Address"
            value={address}
            onChangeText={text => setAddress(text)}
            mode={'outlined'}
            dense
          />
          <Button
            onPress={_navToHome}
            loading={loading}
            mode="contained"
            compact
            style={commonStyles.marginVertical()}>
            Sign up
          </Button>
        </View>
      </ScrollView>
      {/* MSG Footer / Bottom Section */}
      <Button
        onPress={_navToSignin}
        uppercase={false}
        compact
        style={commonStyles.margin('1%')}>
        Already have an account? Signin
      </Button>
      <View />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
