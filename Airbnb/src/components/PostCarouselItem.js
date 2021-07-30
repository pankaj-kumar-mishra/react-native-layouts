/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PostCarouselItem = ({post}) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const navToDetailPost = () => {
    navigation.navigate('PostInfo', {postId: post.id});
  };

  return (
    <Pressable onPress={navToDetailPost} style={[styles.container, {width}]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{uri: post.image}} />

        <View style={styles.rightContainer}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  rightContainer: {flex: 1, marginHorizontal: 10},
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});
