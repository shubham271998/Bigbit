import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './BIBTPortfolioValueCard-styles';

const BIBTPortfolioValueCard = () => {
  return (
    <View style={styles.portfolioCardContainer}>
      <Text style={styles.portfolioCardTitle}>Total Portfolio Value</Text>
      <Text style={styles.portfolioCardValue}>$4,409.98</Text>
      <View style={styles.portfolioValueLossGainContainer}>
        <Text style={styles.portfolioValueLossGain}>+ $342.87</Text>
        <Text style={styles.portfolioValueLossGainMonth}> last month</Text>
      </View>
    </View>
  );
};

export default BIBTPortfolioValueCard;
