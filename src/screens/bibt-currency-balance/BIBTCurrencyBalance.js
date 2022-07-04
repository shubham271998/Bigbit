import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import {BIBTDropDown, BIBTHistoryCard, BIBTButtonsList} from '../../components';
import BIBTLineChart from './bibt-line-chart/BIBTLineChart';

import {ANIMATION} from '../../common/constant';

import palette from '../../theme/palette';
import {APP_THEME} from '../../theme/appTheme';
import {
  CRYPTO_DATA,
  BUTTONS_LIST_DATA,
  CURRENCY,
} from './BIBTCurrencyBalance-constant';

import {DownArrow, Down, Path} from '../../assets';

import {styles} from './BIBTCurrencyBalance-styles';

const BIBTCurrencyBalance = () => {
  const [selectedItem, setSelectedItem] = useState({name: ''});
  const [selectedButton, setSelectedButton] = useState(null);

  const getValue = value => {
    setSelectedButton(value);
  };

  const onSelect = item => {
    setSelectedItem(item);
  };
  const animation = ANIMATION[Math.floor(Math.random() * ANIMATION.length)];

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <View style={styles.mainBalanceContainer}>
        <View style={styles.balanceValueCurrency}>
          <Text style={styles.crytoShortName}>USD </Text>
          <Text style={styles.balanceValue}>26 421.03</Text>
          <Down />
        </View>
        <View style={styles.todaysGainLossContainer}>
          <Path style={styles.pathImage} />
          <Text style={styles.todaysGainLoss}>$241 (13%) today</Text>
        </View>
      </View>
      <View style={styles.graphCardContainer}>
        <BIBTDropDown
          data={CURRENCY}
          onSelect={onSelect}
          value={selectedItem.name}
          placeHolderText={'Timeframe'}
          customOptionsContainer={styles.customOptionsContainer}
          outerOptionsContainer={styles.outerOptionsContainer}
          selectBoxStyle={styles.selectBoxStyle}
        />
        <BIBTButtonsList
          activeBackgroundColor={palette.brain_freeze}
          backgroundColor={palette.light_grey}
          buttonStyles={styles.buttonStyles}
          containerStyles={styles.containerStyles}
          data={BUTTONS_LIST_DATA}
          returnValue={getValue}
        />

        <BIBTLineChart selectedButton={selectedButton} />
      </View>
      <View style={styles.transactionHistoryContainer}>
        <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CRYPTO_DATA}
          keyExtractor={data => data.id}
          scrollEnabled={true}
          renderItem={data => (
            <Animatable.View animation={animation} delay={data.item.id * 500}>
              <BIBTHistoryCard
                cardStyles={styles.cardStyles}
                customImage={data.item.image}
                header={data.item.header}
                footer={data.item.footer}
                mid={data.item.mid}
                customImageRight={DownArrow}
                headerStyles={styles.headerStyles}
                footerStyles={styles.footerStyles}
                midStyles={styles.midStyles}
              />
            </Animatable.View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

export default BIBTCurrencyBalance;
