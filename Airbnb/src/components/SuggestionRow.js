/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item, handleClick}) => (
  <Pressable onPress={handleClick} style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo name={'location-pin'} size={30} />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </Pressable>
);

export default SuggestionRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
});
