import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  BIBTHistoryCard,
  BIBTButtonsList,
  BIBTPieChart,
  BIBTPieChartDescription,
} from '../../components';

import palette from '../../theme/palette';
import {BUTTONS_LIST_DATA} from './BIBITRevenueFlow-constant';
import {APP_THEME} from '../../theme/appTheme';

import {CurrencyLogo} from '../../assets';

import styles from './BIBTRevenueFlow-styles';

const BIBTRevenueFlow = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const getValue = value => {
    setSelectedButton(value);
  };

  const renderButtonListDetails = () =>
    BUTTONS_LIST_DATA.map(() => (
      <BIBTHistoryCard
        cardStyles={styles.cardStyles}
        customImage={CurrencyLogo}
        footer={'42%'}
        header={'BitCoin'}
        mid={'$2,561'}
        midStyles={styles.midStyles}
      />
    ));

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.root}>
      <SafeAreaView style={styles.root}>
        <ScrollView>
          <BIBTButtonsList
            activeBackgroundColor={palette.brain_freeze}
            buttonStyles={styles.buttonStyles}
            containerStyles={styles.containerStyles}
            data={BUTTONS_LIST_DATA}
            returnValue={getValue}
            placeholderStyles={styles.placeholderStyles}
          />
          <View style={styles.pieChartContainer}>
            <BIBTPieChart
              radiusPieChart={100}
              innerRadiusPieChart={85}
              selectedButton={selectedButton}
            />
            <BIBTPieChartDescription
              containerPieChartStyles={styles.containerPieChartStyles}
              selectedButton={selectedButton}
            />
          </View>
          {renderButtonListDetails()}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BIBTRevenueFlow;
