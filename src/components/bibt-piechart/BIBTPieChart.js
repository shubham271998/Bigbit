import React from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import Pie from 'react-native-pie';

import {
  PIECHART_LABEL_APR,
  PIECHART_LABEL_FEB,
  PIECHART_LABEL_JAN,
  PIECHART_LABEL_NOV,
  PIECHART_LABEL_DEC,
  PIECHART_LABEL_MAR,
} from './BIBTPieChart-constant';
import palette from '../../theme/palette';

import styles from './BIBTPieChart-styles';

const BIBTPieChart = props => {
  const {innerRadiusPieChart, radiusPieChart, selectedButton} = props;

  const renderData = data => {
    let result;

    switch (data) {
      case 'Nov':
        result = PIECHART_LABEL_NOV;
        break;
      case 'Dec':
        result = PIECHART_LABEL_DEC;
        break;
      case 'Jan':
        result = PIECHART_LABEL_JAN;
        break;
      case 'Feb':
        result = PIECHART_LABEL_FEB;
        break;
      case 'Mar':
        result = PIECHART_LABEL_MAR;
        break;
      default:
        result = PIECHART_LABEL_APR;
    }
    return result;
  };

  return (
    <KeyboardAvoidingView style={styles.pieChartContainer}>
      <View style={styles.pieChartLabelContainer}>
        <Text style={styles.heading}>{renderData(selectedButton).heading}</Text>
        <Text style={styles.label}>{renderData(selectedButton).label}</Text>
      </View>
      <View style={styles.pieChart}>
        <Pie
          backgroundColor={palette.opaque_white}
          radius={radiusPieChart}
          innerRadius={innerRadiusPieChart}
          sections={renderData(selectedButton).piechartSection}
          dividerSize={10}
          strokeCap={'butt'}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default BIBTPieChart;
