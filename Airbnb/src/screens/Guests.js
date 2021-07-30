/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Guest from '../components/Guest';
import {useNavigation, useRoute} from '@react-navigation/native';

const Guests = ({props}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  //   useEffect(() => {
  //     console.log(adults, children, infants);
  //   }, [adults, children, infants]);

  const handleSearch = () => {
    // NOTE different types result same
    navigation.navigate('SearchResultsTopTabStack');

    // first wrapper stack "BottomTabStack" => it's child stack "HomeStack" => it's child stack "SearchResultsTopTabStack"
    // navigation.navigate('BottomTabStack', {
    //   screen: 'HomeStack',
    //   params: {
    //     screen: 'SearchResultsTopTabStack',
    //     // params: {
    //     //   guests: adults + children,
    //     //   viewport: route.params.viewport,
    //     // },
    //   },
    // });
  };

  return (
    <View style={styles.container}>
      <View>
        <Guest
          title="Adults"
          subTitle="Ages 13 or above"
          count={adults}
          setCount={setAdults}
        />
        <Guest
          title="Children"
          subTitle="Ages 2-12"
          count={children}
          setCount={setChildren}
        />
        <Guest
          title="Infants"
          subTitle="Under 2"
          count={infants}
          setCount={setInfants}
        />
      </View>

      <Pressable onPress={handleSearch} style={styles.btn}>
        <Text style={styles.btnText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default Guests;

const styles = StyleSheet.create({
  container: {justifyContent: 'space-between', height: '100%'},
  btn: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {fontSize: 20, color: 'white', fontWeight: 'bold'},
});
