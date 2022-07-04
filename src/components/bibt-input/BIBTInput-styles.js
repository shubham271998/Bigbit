import {StyleSheet, Platform} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: palette.opacity_white,
    borderRadius: 10,
    color: palette.white,
    height: heightPercent(7),
    marginTop: 8,
    paddingLeft: 45,
    width: widthPercent(90),
  },

  inputContainer: {
    flexDirection: 'row',
  },

  iconStyle: {
    height: 20,
    marginLeft: 13,
    marginTop: Platform.OS === 'ios' ? 28 : 25,
    position: 'absolute',
    width: 20,
    zIndex: 1,
  },

  errorBoxStyle: {
    borderColor: palette.watermelon,
    borderWidth: 2,
  },

  checkIcon: {
    marginLeft: widthPercent(82),
    marginTop: 27,
    position: 'absolute',
  },
});

export default styles;
