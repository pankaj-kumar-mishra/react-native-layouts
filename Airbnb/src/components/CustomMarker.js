/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={styles.marker(isSelected)}>
        <Text style={styles.price(isSelected)}>${price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  marker: isSelected => ({
    backgroundColor: isSelected ? 'black' : 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
  }),
  price: isSelected => ({
    color: isSelected ? 'white' : 'black',
    fontWeight: 'bold',
  }),
});
