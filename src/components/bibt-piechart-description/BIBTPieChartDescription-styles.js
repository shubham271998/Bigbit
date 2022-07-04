import {StyleSheet} from 'react-native';

import {widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  pieChartDesc: {
    alignItems: 'center',
    flexDirection: 'row',
    width: widthPercent(40),
  },

  icon: {
    borderRadius: 15,
    height: 10,
    marginRight: widthPercent(5),
    width: 10,
  },

  priceText: {
    color: palette.white,
    fontWeight: 'bold',
    marginRight: widthPercent(5),
  },
});
export default styles;
