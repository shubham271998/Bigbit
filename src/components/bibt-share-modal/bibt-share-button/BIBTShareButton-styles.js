import {StyleSheet} from 'react-native';

import {widthPercent, heightPercent} from '../../../common/utils';

import palette from '../../../theme/palette';

export const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: palette.watermelon,
    borderRadius: 12,
    height: heightPercent(5.5),
    justifyContent: 'center',
    padding: 0,
    width: widthPercent(25),
  },
  titleStyles: {
    fontWeight: '700',
  },
});
