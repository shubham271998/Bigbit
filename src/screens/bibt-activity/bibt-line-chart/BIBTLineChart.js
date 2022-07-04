import {View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

import {BIBTLoader} from '../../../components';

import useFetchData from '../../../hooks/useFetchData';

import {widthPercent, heightPercent} from '../../../common/utils';
import {API_DATA_URL} from '../../../common/config';

import palette from '../../../theme/palette';

import styles from './BIBTLineChart-styles';

const renderdata = (data, line_chart_data) => {
  const activity_chart_data = line_chart_data[0]?.line_chart?.activity_chart;
  const {data_1d, data_1m, data_3m, data_6m, data_1y, default_data} =
    activity_chart_data;
  let result;

  switch (data) {
    case '1D':
      result = data_1d;
      break;
    case '1M':
      result = data_1m;
      break;
    case '3M':
      result = data_3m;
      break;
    case '6M':
      result = data_6m;
      break;
    case '1Y':
      result = data_1y;
      break;
    default:
      result = default_data;
  }
  return result;
};

const BIBTLineChart = props => {
  const {selectedButton} = props;
  const line_chart_data = useFetchData(API_DATA_URL);
  const x = 50;

  return line_chart_data?.response?.length === 0 ? (
    <BIBTLoader />
  ) : (
    <View style={styles.lineChart}>
      <LineChart
        data={{
          datasets: [
            {
              data: renderdata(selectedButton, line_chart_data.response),
            },
          ],
        }}
        height={heightPercent(25)}
        width={widthPercent(100)}
        withDots={false}
        withHorizontalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        withShadow={false}
        yAxisInterval={1}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: palette.tiffany_blue,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          backgroundGradientFrom: palette.blue_violet,
          color: () => (x > 40 ? palette.purple : palette.watermelon),
          barRadius: 25,
        }}
      />
    </View>
  );
};

export default BIBTLineChart;
