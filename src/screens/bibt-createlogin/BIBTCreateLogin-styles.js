import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    marginTop: 50,
  },

  yellowText: {
    color: palette.lightning_yellow,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 20,
  },

  generateText: {
    color: palette.white,
    fontSize: 16,
    marginTop: 10,
  },

  protectText: {
    color: palette.white,
    fontSize: 16,
  },

  pinContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },

  pinStyle: {
    backgroundColor: palette.brain_freeze,
    borderRadius: 50,
    color: palette.picton_blue,
    fontSize: 0,
    height: 20,
    marginRight: 15,
    textAlign: 'center',
    width: 20,
  },

  touchIdText: {
    color: palette.brain_freeze,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 80,
  },
});

export default styles;
