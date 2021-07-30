/* eslint-disable prettier/prettier */
import * as types from '../types';

const initState = {
  user_data: null,
};

const state_data = (state = initState, action) => {
  switch (action.type) {
    case types.USER_DATA:
      return {
        ...state,
        user_data: action.payload,
      };

    default:
      return state;
  }
};

export default state_data;
