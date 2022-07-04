import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  welcomeTextUserName: {marginLeft: 30},
  welcomeText: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },
  userName: {
    color: palette.persian_indigo,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
  },
  activityCardContainer: {marginLeft: 30},
  activityCardTitle: {
    color: palette.gemini,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 15,
    marginTop: 30,
  },
  recentTransactionHeading: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 15,
    marginLeft: 30,
    marginTop: 30,
  },
  cardStyles: {
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
});
