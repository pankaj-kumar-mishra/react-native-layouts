/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const {width, height} = Dimensions.get('window');

const Post = props => {
  // console.log(props.post.id, props.paused);

  const [post, setPost] = useState(props.post);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setPaused(props.paused);
    return () => {
      setPaused(true);
    };
  }, [props.paused]);

  //   MSG NOT FIRING, IT FIRING ON SCREEN CHANGE NOT ON COMPONENT CHANGE
  // useEffect(() => {
  //   return () => {
  //     setPaused(true);
  //   };
  // }, []);

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      {post && (
        <TouchableWithoutFeedback onPress={handlePlayPause}>
          <View>
            <Video
              source={post.videoUri}
              style={styles.video}
              resizeMode="cover"
              paused={paused}
              repeat={true}
              muted={muted}
            />

            <View style={styles.uiContainer}>
              <View style={styles.rightContainer}>
                <Image
                  style={styles.profilePicture}
                  source={post.user.imageUri}
                />

                <TouchableOpacity onPress={onLikePress}>
                  <AntDesign
                    name="heart"
                    size={30}
                    color={isLiked ? 'red' : 'white'}
                  />
                  <Text style={styles.statsLabel}>{post.likes}</Text>
                </TouchableOpacity>

                <View>
                  <FontAwesome name="commenting" size={30} color="white" />
                  <Text style={styles.statsLabel}>{post.comments}</Text>
                </View>

                <View>
                  <Fontisto name="share-a" size={25} color="white" />
                  <Text style={styles.statsLabel}>{post.shares}</Text>
                </View>
              </View>

              <View style={styles.bottomContainer}>
                <View>
                  <Text style={styles.handle}>@{post.user.username}</Text>
                  <Text style={styles.description}>{post.description}</Text>

                  <View style={styles.songRow}>
                    <Entypo name="beamed-note" size={20} color="white" />
                    <Text style={styles.songName}>{post.songName}</Text>
                  </View>
                </View>

                <Image
                  style={styles.songImage}
                  source={{uri: post.songImage}}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //MSG 60 is the bottom tab navigator height
    height: height - 64,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },

  //  right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
