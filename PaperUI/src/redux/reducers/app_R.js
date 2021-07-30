/* eslint-disable prettier/prettier */
import * as types from '../types';

const initState = {
  is_dark_mode: false,
};

const state_data = (state = initState, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME:
      return {
        ...state,
        is_dark_mode: !state.is_dark_mode,
      };

    default:
      return state;
  }
};

export default state_data;
