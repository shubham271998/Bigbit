import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center'},

  container: {flex: 1, justifyContent: 'space-evenly'},

  card: {
    borderRadius: 15,
    backgroundColor: palette.persian_indigo,
    marginHorizontal: 25,
    justifyContent: 'space-evenly',
    height: heightPercent(20),
    width: widthPercent(80),
  },

  cardTitle: {
    color: palette.white,
    fontSize: 15,
    marginHorizontal: 28,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  footerLeft: {
    color: palette.rich_electric_blue,
    fontSize: 30,
    fontWeight: 'bold',
  },

  footerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerRightIcon: {color: palette.watermelon, marginRight: 10},

  footerRightText: {
    color: palette.watermelon,
    fontSize: 15,
    fontWeight: 'bold',
  },

  buttonStyles: {
    borderWidth: 0,
    padding: 13,
  },

  containerStyles: {flexWrap: 'wrap', flexDirection: 'row'},

  placeholderStyles: {fontSize: 12, fontWeight: 'bold'},

  pieChartContainer: {flexDirection: 'row', justifyContent: 'space-evenly'},

  containerPieChartStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: palette.black,
  },

  heading: {fontSize: 14, fontWeight: 'bold', color: 'white'},

  midStyles: {color: palette.brain_freeze},

  cardStyles: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 15,
    marginHorizontal: 15,
    padding: 10,
  },

  customOptionsContainer: {paddingHorizontal: 25},

  outerOptionsContainer: {marginLeft: 25},

  selectBoxStyle: {paddingLeft: 35, marginLeft: 25},
});

export default styles;
