import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

export const styles = StyleSheet.create({
  defaultCardStyles: {
    alignItems: 'center',
    backgroundColor: palette.purple,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },

  defaultHeader: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 8,
    marginTop: 8,
  },

  defaultFooter: {
    color: palette.cultured,
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 8,
  },

  defaultMid: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },

  imageContainer: {
    alignItems: 'center',
    backgroundColor: palette.opaque_white,
    borderRadius: 6,
    flexDirection: 'row',
    height: heightPercent(4),
    justifyContent: 'center',
    width: widthPercent(8),
  },

  defaultTimeStamp: {
    color: palette.cultured,
    fontSize: 10,
    lineHeight: 16,
    marginLeft: 10,
    marginTop: 15,
  },

  header: {flexDirection: 'row'},
});
