import React, {useState} from 'react';
import {SafeAreaView, View, Text, SectionList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BIBTDropDown, BIBTHistoryCard} from '../../components';

import {historyData, historyType} from './BIBTTransactionHistory.constant';
import {APP_THEME} from '../../theme/appTheme';
import palette from '../../theme/palette';

import styles from './BIBTTransactionHistory-styles';

const BIBTTransactionHistory = () => {
  const [selectedItem, setSelectedItem] = useState({name: ''});

  const onSelect = item => {
    setSelectedItem(item);
  };

  const negativeCoinValue = value =>
    value[0] === '-' && {color: palette.white, fontSize: 15};

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.dropDownContainer}>
          <BIBTDropDown
            customOptionsContainer={styles.customOptionsContainer}
            data={historyType}
            onSelect={onSelect}
            outerOptionsContainer={styles.outerOptionsContainer}
            placeHolderText={'All'}
            selectBoxStyle={styles.selectBoxStyle}
            value={selectedItem.name}
          />
        </View>
        <SectionList
          sections={historyData}
          stickySectionHeadersEnabled={false}
          keyExtractor={details => 'key' + details.id + details.title}
          renderItem={details => {
            const {icon: Icon, title, value, date} = details.item;

            return (
              <BIBTHistoryCard
                cardStyles={styles.cardStyles}
                customImage={Icon}
                footer={date}
                footerStyles={styles.footerStyles}
                header={title}
                headerStyles={styles.headerStyles}
                mid={value}
                midStyles={[styles.midStyles, negativeCoinValue(value)]}
                outerContainer={styles.outerContainer}
              />
            );
          }}
          renderSectionHeader={header => (
            <Text style={styles.header}>{header.section.date}</Text>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BIBTTransactionHistory;
