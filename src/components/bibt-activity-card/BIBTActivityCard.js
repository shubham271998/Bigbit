import React from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import palette from '../../theme/palette';

import {styles} from './BIBTActivityCard-styles';

const BIBTActivityCard = props => {
  const {
    coin: Coin,
    color,
    graphData,
    lossGainValue,
    name,
    shortName,
    value,
  } = props;

  return (
    <View style={styles.activityCardContainer}>
      <View style={styles.cryptoDetailsWithValueContainer}>
        <View style={styles.cryptoDetailsContainer}>
          <Coin height={25} width={25} />
          <Text style={styles.activityCardCryptoName}>{name}</Text>
        </View>
        <View style={styles.cryptoValueContainer}>
          <Text style={styles.activityCardValue}>{value}</Text>
          <Text style={styles.cryptoShortName}>{shortName}</Text>
        </View>
        <Text style={styles.cryptoValueLossGain}>{lossGainValue}</Text>
      </View>
      <LineChart
        data={{
          datasets: [
            {
              data: graphData,
            },
          ],
        }}
        height={90}
        width={300}
        withDots={false}
        withHorizontalLabels={false}
        withHorizontalLines={false}
        withInnerLines={false}
        withVerticalLabels={false}
        withVerticalLines={false}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: () => color,
          fillShadowGradientFrom: color,
          fillShadowGradientFromOpacity: 0.8,
          fillShadowGradientTo: palette.miami_marmalade,
          fillShadowGradientToOpacity: 0.01,
          strokeWidth: 3,
        }}
        bezier
      />
    </View>
  );
};

export default BIBTActivityCard;
