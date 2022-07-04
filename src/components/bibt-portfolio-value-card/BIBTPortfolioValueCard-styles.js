import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  portfolioCardContainer: {
    alignItems: 'center',
    backgroundColor: palette.persian_indigo,
    borderRadius: 16,
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
    marginTop: 16,
    padding: 24,
  },

  portfolioCardTitle: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },

  portfolioCardValue: {
    color: palette.white,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
    marginVertical: 8,
  },

  portfolioValueLossGainContainer: {
    flexDirection: 'row',
    marginHorizontal: 89,
  },

  portfolioValueLossGain: {
    color: palette.brain_freeze,
    fontWeight: '700',
    lineHeight: 20,
  },

  portfolioValueLossGainMonth: {
    color: palette.white,
    fontSize: 12,
    lineHeight: 20,
  },
});
