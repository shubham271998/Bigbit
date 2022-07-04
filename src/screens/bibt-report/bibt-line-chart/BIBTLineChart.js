import React from 'react';
import {LineChart} from 'react-native-chart-kit';

import {widthPercent} from '../../../common/utils';

import palette from '../../../theme/palette';
import {LABEL_DATA} from '../BIBTReport-constant';
import {
  DATA_10MIN,
  DATA_1H,
  DATA_1M,
  DATA_1Y,
  DATA_24H,
  DEFAULT_DATA,
} from './BIBTLineChart-constant';

import styles from './BIBTLineChart-styles';

const renderData = data => {
  let result;
  switch (data) {
    case '10Min':
      result = DATA_10MIN;
      break;
    case '1H':
      result = DATA_1H;
      break;
    case '24H':
      result = DATA_24H;
      break;
    case '1M':
      result = DATA_1M;
      break;
    case '1Y':
      result = DATA_1Y;
      break;
    default:
      result = DEFAULT_DATA;
  }
  return result;
};

const BIBTLineChart = props => {
  const {selectedButton} = props;
  return (
    <LineChart
      data={{
        labels: LABEL_DATA,
        datasets: [
          {
            data: renderData(selectedButton),
          },
        ],
      }}
      width={widthPercent(100)}
      height={220}
      withHorizontalLabels={false}
      withDots={false}
      withVerticalLines={false}
      withInnerLines={false}
      withHorizontalLines={false}
      withShadow={true}
      chartConfig={{
        backgroundGradientToOpacity: 0,
        backgroundGradientFromOpacity: 0,
        decimalPlaces: 2,
        color: () => palette.purple,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForLabels: {
          fontSize: 15,
          fontWeight: '400',
        },
        propsForDots: {
          r: '7',
          strokeWidth: '4',
          stroke: palette.white,
        },
      }}
      style={styles.graphContainer}
    />
  );
};

export default BIBTLineChart;
