import {StyleSheet} from 'react-native';
import {widthPercent} from '../../common/utils';
import palette from '../../theme/palette';

const styles = StyleSheet.create({
  leftIconContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    width: widthPercent(50),
    alignItems: 'center',
  },

  headerTitle: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },

  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bigBitHeader: {
    marginHorizontal: 30,
  },

  rightMostIcon: {
    marginLeft: 20,
  },
});

export default styles;
