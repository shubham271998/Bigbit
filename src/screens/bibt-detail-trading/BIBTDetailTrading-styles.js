import {StyleSheet, Platform} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  detailTradingCardContainer: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 16,
    marginLeft: 30,
    marginVertical: 30,
  },
  graphContainer: {
    flex: 1,
    marginTop: heightPercent(10),
  },
  graph: {flex: 1},
  outerContainer: {flexDirection: 'row',},
  cardGraphButtonsContainer: {
    flexDirection: 'column',
    height: heightPercent(85),
    marginLeft: 20,
    width: widthPercent(55),
  },
  buttonsContainer: {flexDirection: 'row', marginLeft: 24},
  buttonWithText: {
    alignItem: 'center',
    backgroundColor: palette.rich_electric_blue,
    borderRadius: 8,
    borderWidth: 0,
    fontSize: 12,
    height: 36,
    justifyContent: 'center',
    padding: 0,
    width: 36,
  },
  buttonWithImage: {
    alignItem: 'center',
    backgroundColor: palette.rich_electric_blue,
    borderRadius: 8,
    borderWidth: 0,
    height: 32,
    justifyContent: 'center',
    padding: 18,
    width: 32,
  },
  buttonWithTextTitle: {fontWeight: '700'},
  orderBookTradesContainer: {
    flexDirection: 'column',
    marginLeft: Platform.OS === 'ios' ? 35 : 20,
  },
  orderBookTitle: {
    color: palette.purple,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 10,
    marginTop: 30,
  },
  orderBookDataContainer: {flexDirection: 'row'},
  bidText: {color: palette.persian_indigo, lineHeight: 20},
  priceText: {color: 'white', lineHeight: 20},
  askText: {color: palette.watermelon, lineHeight: 20},
  tradeTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 10,
    marginTop: 40,
  },
  orderBookAskDataContainer: {marginTop: 10},
  orderBookPriceDataContainer: {marginLeft: 16},
  tradesDataContainer: {flexDirection: 'row'},
  tradesPriceContainer: {marginLeft: 16},
  bidAskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  outerOptionsContainer: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    marginLeft: 18,
    marginTop: 15,
    paddingHorizontal: 0,
  },
  selectBoxStyle: {
    backgroundColor: palette.purple_mountain_majesty,
    height: 30,
    marginLeft: 18,
    marginTop: 18,
  },
  askBid: {
    color: palette.white_smoke,
    fontSize: 12,
    lineHeight: 20,
    marginTop: 8,
  },
  bidValue: {
    color: palette.protoss_pylon,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 8,
  },
  askValue: {
    color: palette.brilliant_rose,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 8,
  },
  priceContainer: {alignItems: 'center'},
  priceValue: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 14,
    marginTop: 8,
  },
  bidAskText: {alignItems: 'center', justifyContent: 'center'},
});

export default styles;
