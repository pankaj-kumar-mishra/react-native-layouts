/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef, createRef} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';

import posts from '../assets/data/feed';
import PostCarouselItem from '../components/PostCarouselItem';

const SearchResultsMaps = props => {
  const _flatlist = useRef();
  const _map = useRef();

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const initial_region = {
    latitude: 28.3279822,
    longitude: -16.5124847,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  };

  const _viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const _onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !_flatlist) {
      return;
    }
    const index = posts.findIndex(place => place.id === selectedPlaceId);
    _flatlist.current.scrollToIndex({index});

    const selectedPlace = posts[index].coordinate;
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    // console.log(`index-> ${index}, selectedPlace-> ${selectedPlace},`);
    // console.log(region);
    // MSG this will nav map to original region
    _map.current.animateToRegion(region, 1000);

    // MSG it only navigate to marker (random or first marker)
    // _map.current.fitToElements(true);
  }, [selectedPlaceId]);

  return (
    <View style={styles.map}>
      <MapView
        ref={_map}
        onMapReady={() => _map.current.fitToElements(true)}
        //provider={PROVIDER_GOOGLE} // MSG on for ios to show google maps instead of apple map
        style={styles.map}
        initialRegion={initial_region}>
        {posts.map((item, index) => (
          <CustomMarker
            key={index}
            coordinate={item.coordinate}
            price={item.newPrice}
            isSelected={item.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(item.id)}
          />
        ))}
      </MapView>
      {/* PART Carousel */}
      <View style={styles.carouselPos}>
        <FlatList
          ref={_flatlist}
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <PostCarouselItem
              key={index}
              post={item}
              // MSG this click animate map to the specified region
              //handleClick={() => _map.current.animateToRegion(initial_region)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          //snapToInterval={width - 30}
          //snapToAlignment="center"
          //decelerationRate="fast"

          pagingEnabled
          bounces={false}
          viewabilityConfig={_viewConfig.current}
          onViewableItemsChanged={_onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMaps;

const styles = StyleSheet.create({
  map: {width: '100%', height: '100%'},
  carouselPos: {position: 'absolute', bottom: 10},
});
