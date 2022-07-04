import {StyleSheet} from 'react-native';

import {heightPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  exchange: {
    flex: 1,
    paddingHorizontal: 20,
  },

  topAmount: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },

  amountData: {
    color: palette.persian_indigo,
    fontSize: 20,
    fontWeight: 'bold',
  },

  percentage: {
    color: palette.blue_violet,
    marginHorizontal: 7,
    marginTop: 6,
  },

  buttons: {
    flexDirection: 'row',
    marginTop: 70,
    marginBottom: 20,
  },

  sellNow: {
    backgroundColor: palette.watermelon,
    borderRadius: 12,
    borderWidth: 0,
    flex: 1,
    marginLeft: 0,
    marginRight: 14,
  },

  buyNow: {
    backgroundColor: palette.rich_electric_blue,
    borderRadius: 12,
    borderWidth: 0,
    flex: 1,
    marginLeft: 0,
  },

  dropDownDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 30,
    zIndex: 3,
  },

  amountAndPercentageData: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  amount: {
    color: palette.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 6,
  },

  percentageData: {
    color: palette.blue_violet,
    fontSize: 12,
    fontWeight: 'bold',
  },

  candleSticksAndAmount: {
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  amountText: {
    color: palette.white,
    marginVertical: 10,
  },

  durationAllDetails: {
    flexDirection: 'row',
  },

  durationOneDetails: {
    alignItems: 'center',
    backgroundColor: palette.light_grey,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 7,
  },

  durationText: {
    color: palette.white,
  },

  selectBoxStyle: {
    backgroundColor: palette.light_black,
    height: heightPercent(4),
  },

  outerOptionsContainer: {
    flex: 1,
    maxHeight: heightPercent(16),
  },

  detailCandleSticks: {
    color: palette.white,
  },

  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyles: {
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },

  containerStyles: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
});

export default styles;
