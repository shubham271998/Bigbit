import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  arrowContainer: {
    flexDirection: 'row',
  },

  arrow: {
    marginRight: 10,
  },

  heart: {
    marginRight: 20,
  },

  headerLeftText: {
    color: palette.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  rightMostIcon: {
    marginLeft: 20,
  },

  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
