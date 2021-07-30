/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
// import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {commonStyles} from '../../../utils/commonStyles';

const Home = () => {
  // const {user_data} = useSelector(
  //   (state) => ({
  //     user_data: state.auth_R.user_data,
  //   }),
  //   shallowEqual,
  // );
  // const dispatch = useDispatch();

  return (
    <View style={commonStyles.flex()}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[0, 1, 2].map((itme, index) => (
          <Card key={index} style={commonStyles.marginBottom()}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={() => <Avatar.Icon icon="folder" size={40} />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
