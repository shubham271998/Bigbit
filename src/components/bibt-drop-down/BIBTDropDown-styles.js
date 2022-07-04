import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  dropDown: {
    zIndex: 2,
  },

  selectBox: {
    alignItems: 'center',
    backgroundColor: palette.opacity_white,
    borderRadius: 6,
    flexDirection: 'row',
    height: heightPercent(5),
    justifyContent: 'space-between',
    margin: 8,
    paddingHorizontal: 12,
    width: widthPercent(25),
  },

  optionsContainer: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },

  outerOptionContainer: {
    backgroundColor: palette.blue_violet,
    margin: 8,
    maxHeight: heightPercent(12),
    padding: 8,
    position: 'absolute',
    top: heightPercent(4),
    width: widthPercent(25),
  },

  name: {
    color: palette.white,
  },
});

export default styles;
