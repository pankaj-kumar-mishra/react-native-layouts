/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const space = '3%';

export const commonStyles = StyleSheet.create({
  showSuggestion: {
    flex: 1,
  },
  vhCenter: (n = 1) => ({
    flex: n,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  backgroundColor: bgColor => ({
    backgroundColor: bgColor,
  }),
  color: color => ({
    color: color,
  }),
  flex: (n = 1) => ({
    flex: n,
  }),
  width: (w = '100%') => ({
    width: w,
  }),
  padding: (p = space) => ({
    padding: p,
  }),
  margin: (m = space) => ({
    margin: m,
  }),
  paddingTop: (pt = space) => ({
    paddingTop: pt,
  }),
  marginTop: (mt = space) => ({
    marginTop: mt,
  }),
  paddingBottom: (pb = space) => ({
    paddingBottom: pb,
  }),
  marginBottom: (mb = space) => ({
    marginBottom: mb,
  }),
  paddingLeft: (pl = space) => ({
    paddingLeft: pl,
  }),
  marginLeft: (ml = space) => ({
    marginLeft: ml,
  }),
  paddingRight: (pr = space) => ({
    paddingRight: pr,
  }),
  marginRight: (mr = space) => ({
    marginRight: mr,
  }),
  paddingVertical: (pv = space) => ({
    paddingVertical: pv,
  }),
  paddingHorizontal: (ph = space) => ({
    paddingHorizontal: ph,
  }),
  marginVertical: (mv = space) => ({
    marginVertical: mv,
  }),
  marginHorizontal: (mh = space) => ({
    marginHorizontal: mh,
  }),
});
