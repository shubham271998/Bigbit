import {View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

import {BIBTLoader} from '../../../components';

import useFetchData from '../../../hooks/useFetchData';

import {widthPercent, heightPercent} from '../../../common/utils';
import {API_DATA_URL} from '../../../common/config';

import palette from '../../../theme/palette';

import styles from './BIBTLineChart-styles';

const BIBTLineChart = () => {
  const line_chart_data = useFetchData(API_DATA_URL);
  const market_chart_data = line_chart_data?.response;
  console.warn(market_chart_data[0]?.line_chart?.activity_chart.data_1d);
  const x = 50;

  return line_chart_data.response?.length === 0 ? (
    <BIBTLoader />
  ) : (
    <View style={styles.lineChart}>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: market_chart_data[0]?.line_chart?.activity_chart.data_1d,
            },
          ],
        }}
        width={widthPercent(90)}
        height={heightPercent(25)}
        withDots={false}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: palette.tiffany_blue,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          fillShadowGradientFrom: palette.purple,
          fillShadowGradientTo: palette.purple,
          fillShadowGradientOpacity: 1,
          color: () => (x > 40 ? palette.purple : palette.watermelon),
          labelColor: () => palette.white,
          barRadius: 25,
        }}
        bezier
      />
    </View>
  );
};

export default BIBTLineChart;
