import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  mainContainer: {flex: 1},

  cardContainer: {
    alignItems: 'center',
    backgroundColor: palette.persian_indigo,
    borderRadius: 10,
    height: heightPercent(9),
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 100,
    width: widthPercent(42),
  },

  graphContainer: {
    flex: 1,
    marginTop: 6,
    width: widthPercent(100),
  },

  containerStyles: {
    flexDirection: 'row',
    marginBottom: -70,
    marginLeft: 18,
    marginTop: 25,
  },

  buttonStyles: {
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  upperText: {
    color: palette.lighter_purple,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },

  lowerText: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },

  detailCardContainer: {flex: 1, marginBottom: 60},

  detailContainer: {
    borderBottomColor: palette.cool_grey,
    borderBottomWidth: 0.5,
    height: heightPercent(9),
    marginLeft: 30,
    width: widthPercent(85),
  },

  upperRow: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  lowerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    color: palette.interdimensional_blue,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  marketCap: {
    color: palette.protoss_pylon,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },

  capLabel: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },

  overallCap: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
});

export default styles;
