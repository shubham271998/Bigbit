import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.lightest_black,
    borderColor: palette.satin_deep_black_light,
    borderRadius: 20,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: heightPercent(2),
    width: widthPercent(40),
  },

  dropDownUnSelected: {
    maxHeight: heightPercent(15),
  },

  labelText: {fontWeight: '600', color: palette.white},

  buttonTitle: {
    color: palette.persian_indigo,
    fontWeight: '700',
    marginLeft: widthPercent(3),
  },

  dotPrimary: {
    backgroundColor: palette.purple,
    borderRadius: 50,
    height: 10,
    marginHorizontal: widthPercent(2),
    width: 10,
  },

  dotSecondary: {
    backgroundColor: palette.watermelon,
    borderRadius: 50,
    height: 10,
    marginLeft: widthPercent(5),
    marginRight: widthPercent(2),
    width: 10,
  },

  dropDown: {backgroundColor: palette.light_black, height: heightPercent(4)},

  chartLabel: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: widthPercent(3),
  },

  linearGradient: {
    flex: 1,
    paddingLeft: widthPercent(7),
    paddingRight: widthPercent(4),
  },

  chartHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 3,
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: heightPercent(1),
  },

  chart: {
    marginBottom: heightPercent(2),
  },
});

export default styles;
