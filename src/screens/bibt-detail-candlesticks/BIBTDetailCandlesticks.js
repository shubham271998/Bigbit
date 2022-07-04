import React from 'react';
import {View, Text, processColor} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CombinedChart} from 'react-native-charts-wrapper';

import {BIBTButtonsList} from '../../components';

import palette from '../../theme/palette';
import {
  BAR_DATA,
  BUTTONS_TITLE_DATA,
  CANDLE_DATA,
  DATA,
  LINE_DATA,
} from './BIBTDetailCandlesticks-constant';
import {APP_THEME} from '../../theme/appTheme';

import styles from './BIBTDetailCandlesticks-styles';

const BIBTDetailCandlesticks = () => {
  const data = {
    barData: {
      dataSets: BAR_DATA,
    },
    lineData: {
      dataSets: LINE_DATA,
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

  const renderData = () => {
    return DATA.map(({text, value}) => {
      return (
        <View style={styles.valueContainer} key={text}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.textValue}>{value}</Text>
        </View>
      );
    });
  };

  const getValue = () => {};

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.mainContainer}>
      <View style={styles.balanceCard}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Balance</Text>
          <Text style={styles.balance}>$ 4,290.01</Text>
        </View>
        {renderData()}
      </View>
      <BIBTButtonsList
        activeBackgroundColor={palette.persian_indigo}
        buttonStyles={styles.buttonStyles}
        containerStyles={styles.containerStyles}
        data={BUTTONS_TITLE_DATA}
        returnValue={getValue}
        activeTextColor={palette.white}
      />
      <View style={styles.graphContainer}>
        <CombinedChart
          data={data}
          highlightFullBarEnabled={false}
          drawOrder={['LINE', 'CANDLE', 'BAR']}
          style={styles.graph}
        />
      </View>
    </LinearGradient>
  );
};

export default BIBTDetailCandlesticks;
