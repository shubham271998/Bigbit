import {View, Text} from 'react-native';
import React from 'react';

import {heightPercent} from '../../common/utils';

import {
  GROUP_BAR_CHART_DATA_DEFAULT,
  LABEL_Y_DEFAULT,
} from './BIBTGroupBarChart-constant';
import palette from '../../theme/palette';

import {Bar, Line} from '../../assets';

import styles from './BIBTGroupBarChart-styles';

const BIBTGroupBarChart = props => {
  const {
    data = GROUP_BAR_CHART_DATA_DEFAULT,
    labelY = LABEL_Y_DEFAULT,
    style,
  } = props;
  const renderChart = () =>
    data.map(eachBar => (
      <View key={eachBar.label}>
        <View style={styles.barSets} key={eachBar.label}>
          <Bar
            height={eachBar.data[0]}
            color={palette.purple}
            style={styles.barSpace}
          />
          <Line height={heightPercent(30)} style={styles.barSpace} />
          <Bar
            height={eachBar.data[1]}
            color={palette.watermelon}
            style={styles.barSpace}
          />
        </View>
        <Text style={styles.label}>{eachBar.labelx}</Text>
      </View>
    ));
  const renderLabelY = () =>
    labelY.map(label => <Text style={styles.labelY}>{label}</Text>);
  return (
    <View style={[styles.groupBarChart, style]}>
      <View style={styles.labelYContainer}>{renderLabelY()}</View>
      <View style={styles.chart}>{renderChart()}</View>
    </View>
  );
};

export default BIBTGroupBarChart;
