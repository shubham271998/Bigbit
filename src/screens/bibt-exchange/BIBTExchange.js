import {View, Text} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {CandlestickChart} from 'react-native-wagmi-charts';

import {BIBTButton, BIBTDropDown, BIBTButtonsList} from '../../components';
import useFetchData from '../../hooks/useFetchData';

import {heightPercent, widthPercent} from '../../common/utils';
import {CRYPTO_NAME_URL} from '../../common/config';
import {
  DATA_1D,
  DATA_5D,
  DATA_1M,
  DATA_1Y,
  DATA_5Y,
  AMOUNT_DETAILS,
  DURATION,
} from './BIBTExchange-constant';
import {APP_THEME} from '../../theme/appTheme';
import palette from '../../theme/palette';

import {DownArrow} from '../../assets';

import styles from './BIBTExchange-styles';

const BIBTExchange = props => {
  const {navigation} = props;
  const [selectedItem, setSelectedItem] = useState({name: ''});
  const [selectedButton, setSelectedButton] = useState(null);
  const dropDownOptions = useFetchData(CRYPTO_NAME_URL);

  const renderData = data => {
    let result;
    switch (data) {
      case '1D':
        result = DATA_1D;
        break;
      case '5D':
        result = DATA_5D;
        break;
      case '1M':
        result = DATA_1M;
        break;
      case '1Y':
        result = DATA_1Y;
        break;
      case '5Y':
        result = DATA_5Y;
        break;
      default:
        result = DATA_1D;
    }
    return result;
  };

  const getValue = value => {
    setSelectedButton(value);
  };

  const onSelect = item => {
    setSelectedItem(item);
  };

  const handlePress = () => navigation.navigate('Details');

  const renderAmountBarDetails = () =>
    AMOUNT_DETAILS.map(amountData => {
      const {amount} = amountData;

      return (
        <Text key={amount} style={styles.amountText}>
          {amount}
        </Text>
      );
    });

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.exchange}>
      <View style={styles.topAmount}>
        <Text style={styles.amountData}>$6,750.96</Text>
        <Text style={styles.percentage}>+0.69 (1%)</Text>
      </View>
      <View style={styles.dropDownDetails}>
        <BIBTDropDown
          data={dropDownOptions.response}
          onSelect={onSelect}
          value={selectedItem.name}
          placeHolderText={'C/USD'}
          arrowIcon={DownArrow}
          selectBoxStyle={styles.selectBoxStyle}
          outerOptionsContainer={styles.outerOptionsContainer}
        />
        <View style={styles.amountAndPercentageData}>
          <Text style={styles.amount}>$9839.8</Text>
          <Text style={styles.percentageData}>+3.49%</Text>
        </View>
      </View>
      <View style={styles.candleSticksAndAmount}>
        <CandlestickChart.Provider data={renderData(selectedButton)}>
          <CandlestickChart width={widthPercent(70)} height={heightPercent(30)}>
            <CandlestickChart.Candles
              positiveColor={palette.watermelon}
              negativeColor={palette.persian_indigo}
            />
          </CandlestickChart>
        </CandlestickChart.Provider>
        <View>{renderAmountBarDetails()}</View>
      </View>
      <View style={styles.durationAllDetails}>
        <BIBTButtonsList
          activeBackgroundColor={palette.brain_freeze}
          backgroundColor={palette.light_grey}
          buttonStyles={styles.buttonStyles}
          containerStyles={styles.containerStyles}
          data={DURATION}
          returnValue={getValue}
        />
      </View>
      <View style={styles.buttons}>
        <BIBTButton title="Sell" buttonStyles={styles.sellNow} />
        <BIBTButton title="Buy Now" buttonStyles={styles.buyNow} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailCandleSticks} onPress={handlePress}>
          Watch Detail CandleSticks
        </Text>
      </View>
    </LinearGradient>
  );
};

export default BIBTExchange;
