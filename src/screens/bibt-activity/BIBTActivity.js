import {Text, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {BIBTButton, BIBTDropDown, BIBTButtonsList} from '../../components/';
import BIBTLineChart from './bibt-line-chart/BIBTLineChart';
import useFetchData from '../../hooks/useFetchData';

import {CAPITAL_DETAILS, BUTTONS_LIST_DATA} from './BIBTActivity-constant';
import {CRYPTO_NAME_URL} from '../../common/config';
import {APP_THEME} from '../../theme/appTheme';
import palette from '../../theme/palette';

import {DownIcon, GreenIncrement} from '../../assets';

import styles from './BIBTActivity-styles';

const BIBTActivity = props => {
  const {navigation} = props;
  const [selectedItem, setSelectedItem] = useState({name: ''});
  const [selectedButton, setSelectedButton] = useState(null);

  const currencyData = useFetchData(CRYPTO_NAME_URL);

  const getValue = value => {
    setSelectedButton(value);
  };

  const onSelect = item => {
    setSelectedItem(item);
  };

  const handlePress = () => navigation.navigate('Exchange');

  const renderCapitalDetails = () =>
    CAPITAL_DETAILS.map(capitalDetails => {
      const {capitalAmount, capitalText} = capitalDetails;
      return (
        <View style={styles.amountText} key={capitalAmount}>
          <Text style={styles.capital}>{capitalAmount}</Text>
          <Text style={styles.capitalText}>{capitalText} </Text>
        </View>
      );
    });

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.activity}>
      <View style={styles.activityDetails}>
        <View style={styles.card}>
          <BIBTDropDown
            data={currencyData.response}
            onSelect={onSelect}
            value={selectedItem.name}
            placeHolderText={'C/USD'}
            arrowIcon={DownIcon}
            selectBoxStyle={styles.selectBoxStyle}
            outerOptionsContainer={styles.outerOptionsContainer}
          />
          <Text style={styles.cardAmount}>$ 4,781.19</Text>
          <View style={styles.textAndIcon}>
            <Text style={styles.gdax}>GDAX</Text>
            <View style={styles.textIncrementIcon}>
              <Text style={styles.percentText}>2,39%</Text>
              <GreenIncrement />
            </View>
          </View>
        </View>
        <View style={styles.totalCapitalDetails}>{renderCapitalDetails()}</View>
        <View>
          <BIBTLineChart selectedButton={selectedButton} />
        </View>
        <View style={styles.labelTime}>
          <BIBTButtonsList
            activeBackgroundColor={palette.brain_freeze}
            buttonStyles={styles.buttonStyles}
            containerStyles={styles.containerStyles}
            data={BUTTONS_LIST_DATA}
            returnValue={getValue}
          />
        </View>
        <View style={styles.highVol}>
          <View style={styles.amountDetails}>
            <Text style={styles.details}>High</Text>
            <Text style={styles.amount}>$ 4,925.65</Text>
          </View>
          <View style={styles.amountDetails}>
            <Text style={styles.details}>Vol</Text>
            <Text style={styles.amount}>$ 55.65</Text>
          </View>
        </View>
        <View style={styles.highVol}>
          <View style={styles.amountDetails}>
            <Text style={styles.details}>Low</Text>
            <Text style={styles.amount}>$ 4,701.63</Text>
          </View>
          <View style={styles.amountDetails}>
            <Text style={styles.pastDay}>Past day</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <BIBTButton title="Sell" buttonStyles={styles.sell} />
          <BIBTButton title="Buy" buttonStyles={styles.buy} />
        </View>
        <View style={styles.candleSticks}>
          <Text style={styles.watchCandle} onPress={handlePress}>
            Watch Exchange Candlesticks
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default BIBTActivity;
