import {View, Text} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {BIBTButtonsList} from '../../components';
import BIBTLineChart from './bibt-line-chart/BIBTLineChart';

import palette from '../../theme/palette';
import {DETAILS, BUTTONS_TITLE_DATA} from './BIBTReport-constant';
import {APP_THEME} from '../../theme/appTheme';

import styles from './BIBTReport-styles';

const BIBTReport = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const getValue = value => {
    setSelectedButton(value);
  };

  const renderDetailsCard = () => {
    return DETAILS.map(props => {
      const {label, marketCap, capLabel, overallCap} = props;

      return (
        <View style={styles.detailContainer} key={label}>
          <View style={styles.upperRow}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.marketCap}>{marketCap}</Text>
          </View>
          <View style={styles.lowerRow}>
            <Text style={styles.capLabel}>{capLabel}</Text>
            <Text style={styles.overallCap}>{overallCap}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.mainContainer}>
      <BIBTButtonsList
        activeBackgroundColor={palette.brain_freeze}
        buttonStyles={styles.buttonStyles}
        containerStyles={styles.containerStyles}
        data={BUTTONS_TITLE_DATA}
        returnValue={getValue}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.upperText}>$6,539.39 USD</Text>
        <Text style={styles.lowerText}>24 Oct., UTC +4.00</Text>
      </View>
      <BIBTLineChart selectedButton={selectedButton} />
      <View style={styles.detailCardContainer}>{renderDetailsCard()}</View>
    </LinearGradient>
  );
};

export default BIBTReport;
