/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../components/Post';

import dummyPosts from '../assets/data/feed';

const SearchResults = props => {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post key={item.id} post={item} />}
      />
    </View>
  );
};

export default SearchResults;
