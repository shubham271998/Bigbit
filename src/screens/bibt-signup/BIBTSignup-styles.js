import {StyleSheet, Platform} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  linearGradient: {flex: 1},

  mainContainer: {
    alignItems: 'center',
  },

  bigBitIcon: {
    marginTop: Platform.OS === 'ios' ? heightPercent(6) : heightPercent(6),
  },

  errorContainer: {
    width: widthPercent(90),
    justifyContent: 'flex-start',
  },

  titleContainer: {
    width: widthPercent(90),
    justifyContent: 'flex-start',
  },

  inputTitle: {
    color: palette.white,
    fontWeight: 'bold',
    marginTop: 20,
  },

  errorMessage: {
    color: palette.watermelon,
  },

  phoneText: {
    color: palette.white,
    fontWeight: 'bold',
    marginTop: 20,
  },

  nameText: {
    marginTop: 30,
  },

  inputField: {
    marginTop: 30,
  },

  getStartedText: {
    color: palette.blue_violet,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  textContainer: {
    flexDirection: 'row',
  },

  createText: {
    color: palette.white,
    fontSize: 15,
    marginTop: 20,
  },

  privacyText: {
    color: palette.brain_freeze,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },

  buttonStyles: {
    borderWidth: 0,
    marginTop: 40,
    width: widthPercent(90),
  },

  titleStyles: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 70 : 30,
  },

  accountText: {color: palette.white, fontSize: 15},

  loginText: {color: palette.brain_freeze, fontSize: 15, fontWeight: 'bold'},
});

export default styles;
