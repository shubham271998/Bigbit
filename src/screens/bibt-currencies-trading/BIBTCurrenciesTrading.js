import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import {BIBTHistoryCard} from '../../components';

import {ANIMATION} from '../../common/constant';
import palette from '../../theme/palette';
import {TRADING_DETAILS} from './BIBTCurrenciesTrading-constant';

import {RedArrow, ArrowUp, LeftArrow} from '../../assets';

import {styles} from './BIBTCurrenciesTrading-styles';

const BIBTCurrenciesTrading = () => {
  const animation = ANIMATION[Math.floor(Math.random() * ANIMATION.length)];
  let interval = 1;
  const renderItems = props => {
    const {item} = props;
    const {currencyName, currencyValue, icon} = item;

    return (
      <Animatable.View animation={animation} delay={++interval * 300}>
        <BIBTHistoryCard
          header={currencyName}
          footer={currencyValue}
          customImage={icon}
          customImageRight={LeftArrow}
          cardStyles={styles.cardStyles}
          headerStyles={styles.headerStyles}
          footerStyles={styles.footerStyles}
        />
      </Animatable.View>
    );
  };

  return (
    <LinearGradient
      colors={[palette.tiffany_blue, palette.blue_violet]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.totalCardContainer}>
          <View style={styles.leftDataContainer}>
            <Text style={styles.balanceText}>Total Balance</Text>
            <Text style={styles.totalBalanceText}>$26 421.03</Text>
            <View style={styles.currenciesContainer}>
              <Text style={styles.balanceText}>USD 1365,71</Text>
              <RedArrow />
            </View>
          </View>
          <View style={styles.rightDataContainer}>
            <ArrowUp />
            <Text style={styles.profitText}>$356 (13%)</Text>
          </View>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={TRADING_DETAILS}
            renderItem={renderItems}
            keyExtractor={(_, key) => `key-${key}`}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BIBTCurrenciesTrading;
