/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {FlatList, Dimensions, View} from 'react-native';
import Post from '../components/Post';
import posts from '../assets/data/posts';

const {width, height} = Dimensions.get('window');
// const {width, height} = Dimensions.get('screen');

// window: reports width/height without the soft menu bar
// screen: reports entire screen's width/height

const Home = props => {
  const [activeId, setActiveId] = useState(null);

  // viewAreaCoveragePercentThreshold: 70
  const _viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const _onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedItem = viewableItems[0].item;
      setActiveId(selectedItem.id);
    }
  });

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Post key={index} post={item} paused={activeId !== item.id} />
        )}
        showsVerticalScrollIndicator={false}
        //snapToInterval={height - 60}
        //snapToAlignment={'start'}
        //decelerationRate={'fast'}
        pagingEnabled
        bounces={false}
        viewabilityConfig={_viewConfig.current}
        onViewableItemsChanged={_onViewChanged.current}
      />
    </View>
  );
};

export default Home;
