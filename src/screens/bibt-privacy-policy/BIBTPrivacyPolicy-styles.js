import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  linearGradient: {flex: 1},

  buttonContainer: {
    flexDirection: 'row',
    paddingLeft: 40,
    marginTop: 20,
  },

  button: {
    alignItems: 'center',
    backgroundColor: palette.persian_indigo,
    borderRadius: 8,
    marginRight: 8,
    padding: 6,
    width: 120,
  },

  button2: {
    backgroundColor: palette.light_grey,
    borderWidth: null,
  },

  buttonText: {
    color: palette.white_smoke,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },

  image: {
    alignItems: 'center',
  },

  policyText: {
    color: palette.white,
    fontSize: 14,
    lineHeight: 22,
    marginHorizontal: 40,
    marginTop: -45,
  },

  policyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 28,
    padding: 2,
  },

  propertyText: {
    color: palette.white,
    fontSize: 12,
    lineHeight: 20,
  },

  valueText: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },
});
