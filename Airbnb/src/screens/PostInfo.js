/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import DetailedPost from '../components/DetailedPost';

import posts from '../assets/data/feed';

const PostInfo = props => {
  const route = useRoute();

  const post = posts.find(item => item.id === route.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostInfo;
