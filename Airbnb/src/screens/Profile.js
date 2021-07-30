/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View>
      <Text style={styles.test}>Profile Screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
    color: 'red',
  },
});
