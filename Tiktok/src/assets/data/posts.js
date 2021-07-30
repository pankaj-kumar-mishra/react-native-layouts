/* eslint-disable prettier/prettier */
const small = require('../videos/small.m4v');
const cannon = require('../videos/cannon.m4v');
const avatar = require('../images/avatar.png');

export default [
  {
    id: 'p1',
    videoUri: small,
    user: {
      id: 'u1',
      username: 'daviddobrik',
      imageUri: avatar,
    },
    description: 'hahahah oh boy @borat',
    songName: 'NF - The search',
    songImage:
      'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
    likes: 123,
    comments: 12,
    shares: 44,
  },

  {
    id: 'p2',
    videoUri: cannon,
    user: {
      id: 'u1',
      username: 'Test',
      imageUri: avatar,
    },
    description: 'hahahah oh boy @borat',
    songName: 'NF - The search',
    songImage:
      'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
    likes: 123,
    comments: 12,
    shares: 44,
  },

  {
    id: 'p3',
    videoUri: small,
    user: {
      id: 'u1',
      username: 'User 3',
      imageUri: avatar,
    },
    description: 'hahahah oh boy @borat',
    songName: 'NF - The search',
    songImage:
      'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
    likes: 123,
    comments: 12,
    shares: 44,
  },
];
