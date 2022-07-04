import {StyleSheet} from 'react-native';

import {heightPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  root: {flex: 1},

  buttonStyles: {
    borderWidth: 0,
    padding: 15,
  },

  containerStyles: {flexWrap: 'wrap', flexDirection: 'row', margin: 5},

  placeholderStyles: {fontSize: 12, fontWeight: 'bold'},

  pieChartContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: heightPercent(40),
  },

  containerPieChartStyles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    padding: 10,
  },

  midStyles: {color: palette.brain_freeze, marginLeft: 40, paddingLeft: 40},

  cardStyles: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
});

export default styles;
