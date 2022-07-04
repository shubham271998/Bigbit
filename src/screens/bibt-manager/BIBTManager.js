import {SafeAreaView, View, Text} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  BIBTDropDown,
  BIBTHistoryCard,
  BIBTPieChart,
  BIBTButtonsList,
  BIBTPieChartDescription,
} from '../../components';

import palette from '../../theme/palette';
import {APP_THEME} from '../../theme/appTheme';
import {
  BUTTONS_LIST_DATA,
  CURRENCY_DATA,
  CARD_DATA,
  HEADINGS,
} from './BIBITManager-constant';

import {CurrencyLogo, Path} from '../../assets';

import styles from './BIBTManager-styles';

const BIBTManager = props => {
  const {navigation} = props;
  const {title, price, loss} = CARD_DATA;

  const [selectedItem, setSelectedItem] = useState({name: ''});
  const [selectedButton, setSelectedButton] = useState(null);

  const onSelect = item => {
    setSelectedItem(item);
  };

  const getValue = value => {
    setSelectedButton(value);
  };

  const handlePress = () => navigation.navigate('Revenue');

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.root}>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <BIBTDropDown
            customOptionsContainer={styles.customOptionsContainer}
            data={CURRENCY_DATA}
            onSelect={onSelect}
            outerOptionsContainer={styles.outerOptionsContainer}
            placeHolderText={'ALL'}
            selectBoxStyle={styles.selectBoxStyle}
            value={selectedItem.name}
          />
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.footer}>
            <Text style={styles.footerLeft}>{price}</Text>
            <View style={styles.footerRightContainer}>
              <Path style={styles.footerRightIcon} />
              <Text style={styles.footerRightText}>{loss}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.heading} onPress={handlePress}>
          {HEADINGS.revenue}
        </Text>
        <BIBTButtonsList
          activeBackgroundColor={palette.brain_freeze}
          activeTextColor={palette.black}
          buttonStyles={styles.buttonStyles}
          containerStyles={styles.containerStyles}
          data={BUTTONS_LIST_DATA}
          placeholderStyles={styles.placeholderStyles}
          returnValue={getValue}
        />
        <View style={styles.pieChartContainer}>
          <BIBTPieChart
            innerRadiusPieChart={60}
            radiusPieChart={70}
            selectedButton={selectedButton}
          />
          <BIBTPieChartDescription
            containerPieChartStyles={styles.containerPieChartStyles}
            selectedButton={selectedButton}
          />
        </View>
        <Text style={styles.heading}>{HEADINGS.management}</Text>
        <BIBTHistoryCard
          cardStyles={styles.cardStyles}
          customImage={CurrencyLogo}
          footer={'Receive from - 167…345'}
          header={'14 Mar 2019'}
          mid={'+0.001 RPL'}
          midStyles={styles.midStyles}
          timeStamp={'13:34'}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BIBTManager;
