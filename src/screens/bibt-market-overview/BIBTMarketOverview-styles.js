import {StyleSheet, Platform} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  marketOverview: {
    flex: 1,
  },

  selectBoxStyle: {
    backgroundColor: palette.light_black,
    height: heightPercent(4),
    width: widthPercent(25),
  },

  outerOptionsContainer: {
    maxHeight: heightPercent(12),
  },

  market: {
    padding: 20,
  },

  logoAndAmountDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 10,
  },

  logoCoin: {
    flexDirection: 'row',
  },

  coinText: {
    marginLeft: 15,
  },

  coin: {
    color: palette.purple,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  shortCoinText: {
    color: palette.purple,
  },

  amountDollar: {
    color: palette.purple,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  frequency: {
    color: palette.purple,
  },

  personalDetailsCard: {
    marginVertical: Platform.OS === 'android' ? 20 : 40,
    backgroundColor: palette.persian_indigo,
    borderRadius: 8,
    paddingHorizontal: 18,
    height: Platform.OS === 'android' ? heightPercent(25) : heightPercent(24),
  },

  historyText: {
    color: palette.white,
    marginLeft: -50,
  },

  balanceContainer: {
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: palette.dim_grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    padding: 13,
  },
});

export default styles;
