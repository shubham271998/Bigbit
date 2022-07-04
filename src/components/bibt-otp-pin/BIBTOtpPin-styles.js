import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  numberContainer: {
    backgroundColor: palette.brain_freeze,
    borderRadius: 16,
    height: heightPercent(8),
    marginRight: 15,
    textAlign: 'center',
    width: widthPercent(12.5),
  },
});

export default styles;
