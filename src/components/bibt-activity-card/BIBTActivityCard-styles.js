import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  activityCardContainer: {
    alignItems: 'center',
    backgroundColor: palette.persian_indigo,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: 16,
    overflow: 'hidden',
    paddingTop: 18,
    width: 140,
  },

  cryptoDetailsWithValueContainer: {justifyContent: 'flex-start'},

  cryptoDetailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 18,
  },

  cryptoValueContainer: {
    alignItem: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },

  cryptoValueLossGainContainer: {flexDirection: 'row'},

  cryptoValueLossGain: {
    color: palette.miami_marmalade,
    fontSize: 12,
    fontWeight: '700',
    justifyContent: 'flex-start',
    lineHeight: 20,
  },

  activityCardValue: {
    color: palette.white,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
    marginRight: 8,
  },

  cryptoShortName: {
    color: palette.white,
    fontSize: 14,
    lineHeight: 30,
  },

  activityCardCryptoName: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },
});
