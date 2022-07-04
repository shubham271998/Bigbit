import React from 'react';
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryLabel,
  VictoryArea,
} from 'victory-native';

import {GRAPH_DATA} from '../BIBTPrice-constant';
import palette from '../../../theme/palette';
import material from '../BIBTPriceVictoryChart-theme';

import {widthPercent, heightPercent} from '../../../common/utils';

import styles from './BIBTVictoryChart-styles';

const renderData = data => {
  let result;
  switch (data) {
    case '10Min':
      result = GRAPH_DATA['10Min'];
      break;
    case '1H':
      result = GRAPH_DATA['1H'];
      break;
    case '24H':
      result = GRAPH_DATA['24H'];
      break;
    case '1M':
      result = GRAPH_DATA['1M'];
      break;
    case '1Y':
      result = GRAPH_DATA['1Y'];
      break;
    default:
      result = GRAPH_DATA.other;
  }
  return result;
};

export default function BIBTVictoryChart(props) {
  const {selectedButton} = props;
  return (
    <VictoryChart
      padding={styles.chartPadding}
      width={widthPercent(85)}
      height={heightPercent(35)}
      scale={{x: 'linear', y: 'linear'}}
      containerComponent={
        <VictoryVoronoiContainer
          labelComponent={
            <VictoryLabel backgroundStyle={{fill: palette.purple}} />
          }
          labels={({datum}) => `${datum.x},${datum.y}`}
        />
      }
      theme={material}>
      <VictoryArea
        style={{data: {fill: palette.persian_indigo}}}
        data={renderData(selectedButton)}
        animate
      />
    </VictoryChart>
  );
}
