/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import search from '../assets/data/search';
import SuggestionRow from '../components/SuggestionRow';

// const google_api_key = 'AIzaSyCzPCWeaoACu22U9MAWnlKlE5zq1poo1Nc';

const DestinationSearch = ({props}) => {
  const navigation = useNavigation();

  const handleClick = item => {
    navigation.navigate('Guests');
  };

  return (
    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          //navigation.navigate('Guests', { viewport: details.geometry.viewport });
        }}
        onFail={error => console.log('Error: ', error)}
        fetchDetails
        styles={{textInput: styles.textInput}}
        query={{
          key: google_api_key,
          language: 'en',
          //types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      /> */}
      {search.map((item, index) => (
        <SuggestionRow
          handleClick={() => handleClick(item)}
          key={index}
          item={item}
        />
      ))}
    </View>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
});
