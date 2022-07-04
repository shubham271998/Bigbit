import {StyleSheet} from 'react-native';

import {heightPercent} from '../../common/utils';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  linearGradient: {flex: 1},

  balanceValueCurrency: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 46,
  },

  balanceValue: {
    color: palette.white,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
    marginBottom: 14,
  },

  crytoShortName: {
    color: palette.white,
    fontSize: 10,
    marginBottom: 28,
    marginRight: 10,
  },

  todaysGainLossContainer: {
    flexDirection: 'row',
  },

  todaysGainLoss: {
    color: palette.white_smoke,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 32,
  },

  graphCardContainer: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 16,
    marginHorizontal: 30,
    overflow: 'hidden',
  },

  customOptionsContainer: {marginLeft: 20},

  outerOptionsContainer: {marginLeft: 24, marginTop: 27},

  selectBoxStyle: {
    backgroundColor: palette.light_black,
    margin: 24,
    paddingHorizontal: 5,
  },

  pathImage: {marginRight: 11, marginTop: 5},

  transactionHistoryContainer: {flex: 1},

  transactionHistoryTitle: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 16,
    marginLeft: 30,
    marginTop: 30,
  },

  cardStyles: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 12,
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingHorizontal: 20,
  },

  headerStyles: {marginTop: 16, marginRight: 50},

  footerStyles: {marginBottom: 16, marginRight: 45},

  midStyles: {fontWeight: '400', fontSize: 16},

  mainBalanceContainer: {alignItems: 'center'},

  buttonStyles: {
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },

  containerStyles: {
    flexDirection: 'row',
    marginBottom: heightPercent(3),
    marginHorizontal: 5,
    marginTop: heightPercent(0.1),
  },
});
