import {KeyboardAvoidingView, View, Text} from 'react-native';
import React from 'react';

import {
  PIECHART_DESC__LABEL_APR,
  PIECHART_DESC__LABEL_DEC,
  PIECHART_DESC__LABEL_FEB,
  PIECHART_DESC__LABEL_JAN,
  PIECHART_DESC__LABEL_MAR,
  PIECHART_DESC__LABEL_NOV,
} from './BIBTPieChartDescription-constant';

import styles from './BIBTPieChartDescription-styles';

const BIBTPieChartDescription = props => {
  const {containerPieChartStyles, selectedButton} = props;

  const renderData = data => {
    switch (data) {
      case 'Nov':
        return PIECHART_DESC__LABEL_NOV;
      case 'Dec':
        return PIECHART_DESC__LABEL_DEC;
      case 'Jan':
        return PIECHART_DESC__LABEL_JAN;
      case 'Feb':
        return PIECHART_DESC__LABEL_FEB;
      case 'Mar':
        return PIECHART_DESC__LABEL_MAR;
      default:
        return PIECHART_DESC__LABEL_APR;
    }
  };

  return (
    <KeyboardAvoidingView style={containerPieChartStyles}>
      {renderData(selectedButton).map(description => {
        const {property, iconBackground, price, textColor} = description;

        return (
          <View style={styles.pieChartDesc} key={property}>
            <View style={[styles.icon, iconBackground]} />
            <Text style={styles.priceText}>{price}</Text>
            <Text style={[styles.propertyText, textColor]}>{property}</Text>
          </View>
        );
      })}
    </KeyboardAvoidingView>
  );
};

export default BIBTPieChartDescription;
