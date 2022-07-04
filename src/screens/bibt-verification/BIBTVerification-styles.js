import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },

  enterText: {
    color: palette.persian_indigo,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
    marginRight: 170,
    marginTop: 50,
  },

  pleaseText: {
    color: palette.persian_indigo,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginRight: 125,
    marginTop: 25,
  },

  number: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginRight: 220,
    marginTop: 10,
  },

  otpContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 78,
  },

  resendText: {
    color: palette.persian_indigo,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 20,
    textAlign: 'center',
  },

  linkText: {
    color: palette.brain_freeze,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 3,
    textAlign: 'center',
  },

  buttonTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },

  buttonStyle: {
    borderRadius: 16,
    marginTop: 24,
    paddingHorizontal: 120,
  },
});

export default styles;
