import {StyleSheet} from 'react-native';
import {heightPercent} from '../../common/utils';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  totalCardContainer: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 12,
    flexDirection: 'row',
    margin: 30,
  },
  flatlistContainer: {height: heightPercent(58)},
  leftDataContainer: {
    padding: 24,
  },
  balanceText: {
    color: palette.cultured,
    fontSize: 12,
    lineHeight: 20,
    paddingRight: 11,
  },
  totalBalanceText: {
    color: palette.white,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
    marginTop: 16,
  },
  currenciesContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  rightDataContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 18,
  },
  profitText: {
    color: palette.brain_freeze,
    fontSize: 14,
    paddingLeft: 12,
    fontWeight: '700',
  },
  cardStyles: {
    backgroundColor: null,
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  headerStyles: {marginRight: 140},
  footerStyles: {marginRight: 135},
});
