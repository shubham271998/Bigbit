import {StyleSheet} from 'react-native';

import {widthPercent, heightPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 10,
    padding: 15,
    width: widthPercent(87),
  },

  activity: {
    flex: 1,
  },

  activityDetails: {
    marginHorizontal: 25,
  },

  dayText: {
    color: 'white',
    marginHorizontal: 16,
  },

  oneD: {
    marginHorizontal: 0,
  },

  labelTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  amountDetails: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  details: {
    color: palette.white,
    marginRight: 10,
  },

  amount: {
    color: palette.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  highVol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  pastDay: {
    color: palette.brain_freeze,
  },

  buttons: {
    marginVertical: 20,
    flexDirection: 'row',
  },

  sell: {
    backgroundColor: palette.watermelon,
    borderRadius: 15,
    borderWidth: 0,
    flex: 1,
    marginHorizontal: 0,
    marginRight: 10,
    marginVertical: 2,
  },

  buy: {
    backgroundColor: palette.rich_electric_blue,
    borderRadius: 15,
    borderWidth: 0,
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 2,
  },

  watchCandle: {
    color: palette.white,
  },

  candleSticks: {
    alignItems: 'center',
  },

  totalCapitalDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  amountText: {
    marginVertical: 10,
  },

  capital: {
    color: palette.white,
    fontWeight: 'bold',
  },

  capitalText: {
    color: palette.white,
    marginVertical: 5,
  },

  text: {
    zIndex: 1,
  },

  cardAmount: {
    color: palette.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 16,
  },

  textAndIcon: {
    flexDirection: 'row',
    marginTop: 8,
  },

  textIncrementIcon: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  gdax: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
    marginRight: 16,
  },

  percentText: {
    color: palette.green,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
    marginRight: 7.3,
  },

  buttonStyles: {
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  containerStyles: {
    flexDirection: 'row',
  },

  selectBoxStyle: {
    height: heightPercent(4),
  },

  outerOptionsContainer: {
    flex: 1,
    maxHeight: heightPercent(12),
  },
});

export default styles;
