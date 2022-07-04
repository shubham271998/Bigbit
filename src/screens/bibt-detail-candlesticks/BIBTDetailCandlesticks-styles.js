import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  balanceCard: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 16,
    height: heightPercent(23),
    marginLeft: 35,
    marginTop: 46,
    width: widthPercent(80),
  },

  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },

  containerStyles: {
    flexDirection: 'row',
    marginLeft: 34,
    marginTop: 17,
    marginBottom: 10,
  },

  buttonStyles: {
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  balanceText: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },

  balance: {
    color: palette.rich_electric_blue,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
  },

  valueContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 3,
  },

  text: {
    color: palette.cultured,
    fontSize: 12,
    lineHeight: 20,
  },

  textValue: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 10,
  },

  buttonStyle: {
    marginTop: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  graphContainer: {
    marginTop: 10,
    height: heightPercent(45),
  },

  graph: {flex: 1, marginBottom: 20},
});

export default styles;
