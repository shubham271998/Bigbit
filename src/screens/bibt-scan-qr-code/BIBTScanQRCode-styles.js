import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },

  cashText: {
    color: palette.gulf_blue,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: palette.wild_blue,
    borderWidth: 0,
  },

  titleStyle: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
  },

  hintText: {
    color: palette.white,
    fontSize: 14,
    marginHorizontal: 70,
    textAlign: 'center',
  },

  containerText: {flex: 1, justifyContent: 'space-evenly'},

  cameraStyle: {
    width: widthPercent(65),
    height: heightPercent(30),
    marginLeft: widthPercent(17),
  },
});
