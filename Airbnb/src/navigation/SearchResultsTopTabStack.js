/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResults from '../screens/SearchResults';
import SearchResultsMaps from '../screens/SearchResultsMaps';

const TopTab = createMaterialTopTabNavigator();

const SearchResultsTopTabStack = () => {
  return (
    <TopTab.Navigator
      initialRouteName="List"
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <TopTab.Screen name="List" component={SearchResults} />
      <TopTab.Screen name="Map" component={SearchResultsMaps} />
    </TopTab.Navigator>
  );
};

export default SearchResultsTopTabStack;
