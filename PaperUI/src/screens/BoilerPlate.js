/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {useTheme} from 'react-native-paper';
import {commonStyles} from '../../utils/commonStyles';

const BoilerPlate = () => {
  // const {height, width} = useWindowDimensions();
  // const isLandscape = width > height;
  //   const {colors} = useTheme();
  //   const navigation = useNavigation();
  //   const route = useRoute();

  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {

  //   }, []);

  return (
    <View style={[commonStyles.flex(), commonStyles.padding()]}>
      <View />
      {/* MSG Content / Middle Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View />
      </ScrollView>
      {/* MSG Footer / Bottom Section */}
      <View />
    </View>
  );
};

export default BoilerPlate;

const styles = StyleSheet.create({});
