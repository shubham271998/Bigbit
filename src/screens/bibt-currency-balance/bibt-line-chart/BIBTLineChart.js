import React from 'react';
import {LineChart} from 'react-native-chart-kit';

import {BIBTLoader} from '../../../components';

import useFetchData from '../../../hooks/useFetchData';

import {API_DATA_URL} from '../../../common/config';

import palette from '../../../theme/palette';

import styles from './BIBTLineChart-styles';

const renderData = (data, line_chart_data) => {
  const currency_chart_data = line_chart_data[0].line_chart.currency_chart;
  const {
    data_jan,
    data_feb,
    data_mar,
    data_apr,
    data_may,
    data_june,
    default_data,
  } = currency_chart_data;
  let result;

  switch (data) {
    case 'Jan':
      result = data_jan;
      break;
    case 'Feb':
      result = data_feb;
      break;
    case 'Mar':
      result = data_mar;
      break;
    case 'Apr':
      result = data_apr;
      break;
    case 'May':
      result = data_may;
      break;
    case 'June':
      result = data_june;
      break;
    default:
      result = default_data;
  }
  return result;
};

const BIBTLineChart = props => {
  const {selectedButton} = props;
  const currency_chart_data = useFetchData(API_DATA_URL);
  return currency_chart_data?.response?.length === 0 ? (
    <BIBTLoader />
  ) : (
    <LineChart
      data={{
        datasets: [
          {
            data: renderData(selectedButton, currency_chart_data.response),
          },
        ],
      }}
      width={500}
      height={75}
      style={styles.graphAlignment}
      withHorizontalLabels={false}
      withDots={false}
      withVerticalLines={false}
      withInnerLines={false}
      withHorizontalLines={false}
      withVerticalLabels={false}
      chartConfig={{
        backgroundGradientToOpacity: 0,
        backgroundGradientFromOpacity: 0,
        fillShadowGradientFrom: palette.blue_violet,
        fillShadowGradientTo: palette.brilliant_rose,
        fillShadowGradientFromOpacity: 0.8,
        fillShadowGradientToOpacity: 0.01,
        strokeWidth: 1,
        propsForDots: {
          r: '6',
          strokeWidth: '2',
        },
        color: (opacity = 0.0001) => `rgba(247, 147, 26, ${opacity})`,
      }}
      bezier
    />
  );
};

export default BIBTLineChart;
