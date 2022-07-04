import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  priceCardContainer: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 16,
    height: heightPercent(17),
    padding: 25,
    width: widthPercent(82),
  },

  priceText: {
    color: palette.white,
    fontWeight: '400',
  },

  rate: {
    color: palette.rich_electric_blue,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
    marginTop: 5,
  },

  highLowText: {
    color: palette.white,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  upDownPriceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    width: widthPercent(65),
  },

  highRate: {
    color: palette.rich_electric_blue,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  lowRate: {
    color: palette.watermelon,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});

export default styles;
