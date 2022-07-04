import React from 'react';
import {View, Text} from 'react-native';

import styles from './BIBTPriceCard-styles';

const BIBTPriceCard = () => {
  return (
    <View style={styles.priceCardContainer}>
      <Text style={styles.priceText}>Price</Text>
      <Text style={styles.rate}>$ 4,781.19</Text>
      <View style={styles.upDownPriceContainer}>
        <Text style={styles.highLowText}>High</Text>
        <Text style={styles.highRate}>2,39%</Text>
        <Text style={styles.highLowText}>Low</Text>
        <Text style={styles.lowRate}>1,017.30</Text>
      </View>
    </View>
  );
};

export default BIBTPriceCard;
