import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  bidLeftSideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: widthPercent(45),
  },

  containerStyles: {
    flexDirection: 'row',
  },

  buttonStyles: {
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  bidInnerContainer: {
    flex: 1,
  },

  rate: {
    color: palette.white,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  title: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },

  changesRate: {
    color: palette.rich_electric_blue,
    fontSize: 15,
  },

  victoryContainer: {marginLeft: 15},

  chartPadding: {top: 20, left: 50, bottom: 40, right: 20},

  bidOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: heightPercent(4),
    width: widthPercent(90),
  },

  sentButton: {
    backgroundColor: palette.watermelon,
    borderWidth: 0,
    flex: 1,
  },

  dataTimeText: {
    color: palette.white,
    marginBottom: heightPercent(1),
    marginTop: heightPercent(3),
  },

  titleStyles: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },

  lineChart: {
    marginRight: 40,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: heightPercent(3),
    width: widthPercent(86),
  },

  receiveButton: {
    backgroundColor: palette.rich_electric_blue,
    borderWidth: 0,
    flex: 1,
  },
});

export default styles;
