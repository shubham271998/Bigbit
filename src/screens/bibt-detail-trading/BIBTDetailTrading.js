import React, {useState} from 'react';
import {SafeAreaView, View, Text, processColor} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CombinedChart} from 'react-native-charts-wrapper';

import {BIBTButton, BIBTDropDown} from '../../components';

import {APP_THEME} from '../../theme/appTheme';
import palette from '../../theme/palette';
import {
  ORDER_BOOK_ASK,
  ORDER_BOOK_BID,
  ORDER_BOOK_PRICE,
  TRADES_BID,
  TRADES_PRICE,
  BAR_DATA,
  CANDLE_DATA,
  CURRENCY,
} from './BIBTDetailTrading-constant';

import {RoundArrow, SpecialCircle} from '../../assets';

import styles from './BIBTDetailTrading-styles';

const BIBTDetailTrading = () => {
  const [selectedItem, setSelectedItem] = useState({name: ''});
  const onSelect = item => {
    setSelectedItem(item);
  };
  const renderOrderBookBid = () =>
    ORDER_BOOK_BID.map(value => {
      return <Text style={styles.bidText}>{value.orderBid}</Text>;
    });
  const renderOrderBookAsk = () =>
    ORDER_BOOK_PRICE.map(value => {
      return <Text style={styles.priceText}>{value.orderPrice}</Text>;
    });
  const renderTradeBid = () =>
    TRADES_BID.map(value => {
      return <Text style={styles.bidText}>{value.orderBid}</Text>;
    });
  const renderTradePrice = () =>
    TRADES_PRICE.map(value => {
      return <Text style={styles.priceText}>{value.orderPrice}</Text>;
    });
  const renderOrderBookAskData = () =>
    ORDER_BOOK_ASK.map(value => {
      return <Text style={styles.askText}>{value.orderAsk}</Text>;
    });

  const data = {
    barData: {
      dataSets: BAR_DATA,
    },
    candleData: {
      dataSets: [
        {
          values: CANDLE_DATA,
          label: 'Company A',
          config: {
            drawValues: false,
            axisDependency: 'RIGHT',
            highlightColor: processColor(palette.dark_grey),
            shadowColor: processColor(palette.black),
            shadowWidth: 1,
            shadowColorSameAsCandle: true,
            increasingColor: processColor(palette.brilliant_rose),
            increasingPaintStyle: 'FILL',
            decreasingColor: processColor(palette.purple),
          },
        },
      ],
    },
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.cardGraphButtonsContainer}>
          <View style={styles.detailTradingCardContainer}>
            <BIBTDropDown
              data={CURRENCY}
              onSelect={onSelect}
              value={selectedItem.name}
              placeHolderText={'BTC/USD'}
              customOptionsContainer={styles.customOptionsContainer}
              outerOptionsContainer={styles.outerOptionsContainer}
              selectBoxStyle={styles.selectBoxStyle}
            />
            <View style={styles.bidAskContainer}>
              <View style={styles.bidAskText}>
                <Text style={styles.askBid}>Bid</Text>
                <Text style={styles.bidValue}>$ 916.16</Text>
              </View>
              <View style={styles.bidAskText}>
                <Text style={styles.askBid}>Ask</Text>
                <Text style={styles.askValue}>$ 916.16</Text>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.askBid}>Price</Text>
              <Text style={styles.priceValue}>$ 916.16</Text>
            </View>
          </View>
          <View style={styles.graphContainer}>
            <CombinedChart
              data={data}
              highlightFullBarEnabled={false}
              drawOrder={['CANDLE', 'BAR']}
              style={styles.graph}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <BIBTButton
              buttonStyles={styles.buttonWithText}
              title="H1"
              titleStyles={styles.buttonWithTextTitle}
            />
            <BIBTButton
              buttonStyles={styles.buttonWithImage}
              customImage={RoundArrow}
            />
            <BIBTButton
              buttonStyles={styles.buttonWithImage}
              customImage={SpecialCircle}
            />
          </View>
        </View>
        <View style={styles.orderBookTradesContainer}>
          <Text style={styles.orderBookTitle}>Order Book</Text>
          <View style={styles.orderBookDataContainer}>
            <View style={styles.blueAndRedTextContainer}>
              {renderOrderBookBid()}
              <View style={styles.orderBookAskDataContainer}>
                {renderOrderBookAskData()}
              </View>
            </View>
            <View style={styles.orderBookPriceDataContainer}>
              {renderOrderBookAsk()}
            </View>
          </View>
          <Text style={styles.tradeTitle}>Trades</Text>
          <View style={styles.tradesDataContainer}>
            <View>{renderTradeBid()}</View>
            <View style={styles.tradesPriceContainer}>
              {renderTradePrice()}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BIBTDetailTrading;
