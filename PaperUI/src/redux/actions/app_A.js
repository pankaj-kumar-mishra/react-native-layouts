/* eslint-disable prettier/prettier */
import * as types from '../types';

export const toggleTheme = () => {
  return dispatch => {
    dispatch({type: types.TOGGLE_THEME, payload: 'toggle'});
  };
};

// export const getSubCategory = (token, subcat_id) => {
//     return () => {
//       return new Promise((resolve, reject) => {
//         API.get(PATH.subcatInfo(subcat_id), token)
//           .then((res) => {
//             if (res && res.success) {
//               resolve(res.data);
//             } else {
//               reject(res?.msg);
//             }
//           })
//           .catch((err) => {
//             console.log('ERROR', err);
//             reject(err.toString());
//           });
//       });
//     };
//   };
