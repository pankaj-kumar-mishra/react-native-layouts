/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Guest = ({count, setCount, title, subTitle}) => {
  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    //   MSG count value never be less than 0
    // if second value going lessthan 0 then it will keep 0
    setCount(Math.max(0, count - 1));
  };

  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.bold}>{title}</Text>
        <Text style={styles.color}>{subTitle}</Text>
      </View>
      <View style={styles.align}>
        <Pressable onPress={minusCount} style={styles.button}>
          <Text style={styles.btnText}>-</Text>
        </Pressable>

        <Text style={styles.count}>{count}</Text>

        <Pressable onPress={addCount} style={styles.button}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Guest;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  btnText: {fontSize: 20, color: '#474747'},
  align: {flexDirection: 'row', alignItems: 'center'},
  count: {marginHorizontal: 20, fontSize: 16},
  bold: {fontWeight: 'bold'},
  color: {color: '#8d8d8d'},
});
