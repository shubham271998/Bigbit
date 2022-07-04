import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  groupBarChart: {
    flexDirection: 'row',
    height: heightPercent(40),
  },

  labelY: {
    color: palette.white,
    flex: 0.18,
    justifyContent: 'space-evenly',
    marginLeft: 4,
  },
  labelYContainer: {
    marginTop: heightPercent(4),
    borderColor: 'red',
  },

  label: {
    color: palette.white,
    margin: 5,
  },

  chart: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    width: widthPercent(12),
  },

  barSets: {flexDirection: 'row', alignItems: 'flex-end'},

  barSpace: {
    margin: 1,
  },
});

export default styles;
