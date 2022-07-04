import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BIBTButton, BIBTButtonsList, BIBTPriceCard} from '../../components';
import BIBTVictoryChart from './bibt-victory-chart/BIBTVictoryChart';

import {APP_THEME} from '../../theme/appTheme';
import palette from '../../theme/palette';
import {BUTTONS_TITLE_DATA} from './BIBTPrice-constant';

import styles from './BIBTPrice-styles';

const BIBTPrice = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const getValue = value => {
    setSelectedButton(value);
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.mainContainer}>
        <BIBTPriceCard />
        <View style={styles.bidOuterContainer}>
          <View style={styles.bidLeftSideContainer}>
            <View style={styles.bidInnerContainer}>
              <Text style={styles.title}>BID</Text>
              <Text style={styles.rate}>545.0</Text>
            </View>
            <View style={styles.bidInnerContainer}>
              <Text style={styles.title}> ASK</Text>
              <Text style={styles.rate}>346.0</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>CHANGES</Text>
            <Text style={[styles.rate, styles.changesRate]}>+32.10 +6,35%</Text>
          </View>
        </View>
        <Text style={styles.dataTimeText}>12/28/2017 07:40 PM </Text>
        <BIBTButtonsList
          activeBackgroundColor={palette.brain_freeze}
          buttonStyles={styles.buttonStyles}
          containerStyles={styles.containerStyles}
          data={BUTTONS_TITLE_DATA}
          returnValue={getValue}
        />
        <View style={styles.victoryContainer}>
          <BIBTVictoryChart selectedButton={selectedButton} />
        </View>

        <View style={styles.buttonsContainer}>
          <BIBTButton
            title="Sent"
            buttonStyles={styles.sentButton}
            titleStyles={styles.titleStyles}
          />
          <BIBTButton
            title="Receive"
            buttonStyles={styles.receiveButton}
            titleStyles={styles.titleStyles}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BIBTPrice;
