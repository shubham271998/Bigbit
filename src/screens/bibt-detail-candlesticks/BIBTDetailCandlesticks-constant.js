import {processColor} from 'react-native';

import palette from '../../theme/palette';

const DATA = [
  {
    text: 'Open',
    value: '1,097.00',
  },
  {
    text: '24H  High',
    value: '1,017.30',
  },
  {
    text: 'Vol',
    value: '$233.85',
  },
];

const API_DATA = [
  {shadowH: 101.76, shadowL: 100.4, open: 100.78, close: 101.03},
  {shadowH: 101.58, shadowL: 100.27, open: 101.31, close: 101.12},
  {shadowH: 102.24, shadowL: 100.15, open: 101.41, close: 101.17},
  {shadowH: 102.28, shadowL: 101.5, open: 102.24, close: 102.23},
  {shadowH: 102.91, shadowL: 101.78, open: 101.91, close: 102.52},
  {shadowH: 105.18, shadowL: 103.85, open: 103.96, close: 104.58},
  {shadowH: 106.31, shadowL: 104.59, open: 104.61, close: 105.97},
  {shadowH: 106.47, shadowL: 104.96, open: 105.52, close: 105.8},
  {shadowH: 106.5, shadowL: 105.19, open: 106.34, close: 105.92},
  {shadowH: 107.65, shadowL: 105.1401, open: 105.93, close: 105.91},
  {shadowH: 107.29, shadowL: 105.21, open: 105.25, close: 106.72},
  {shadowH: 107.07, shadowL: 105.9, open: 106.48, close: 106.13},
  {shadowH: 106.25, shadowL: 104.89, open: 105.47, close: 105.67},
  {shadowH: 106.19, shadowL: 105.06, open: 106, close: 105.19},
  {shadowH: 107.79, shadowL: 104.88, open: 104.89, close: 107.7},
  {shadowH: 110.42, shadowL: 108.6, open: 108.65, close: 109.56},
  {shadowH: 109.9, shadowL: 108.88, open: 109.72, close: 108.99},
  {shadowH: 110, shadowL: 108.2, open: 108.78, close: 109.99},
  {shadowH: 112.19, shadowL: 110.27, open: 110.42, close: 111.08},
  {shadowH: 110.73, shadowL: 109.42, open: 109.51, close: 109.81},
  {shadowH: 110.98, shadowL: 109.2, open: 110.23, close: 110.96},
  {shadowH: 110.42, shadowL: 108.121, open: 109.95, close: 108.54},
  {shadowH: 109.77, shadowL: 108.17, open: 108.91, close: 108.66},
  {shadowH: 110.61, shadowL: 108.83, open: 108.97, close: 109.04},
  {shadowH: 110.5, shadowL: 108.66, open: 109.34, close: 110.44},
  {shadowH: 112.34, shadowL: 110.8, open: 110.8, close: 112.0192},
  {shadowH: 112.39, shadowL: 111.33, open: 111.62, close: 112.1},
  {shadowH: 112.3, shadowL: 109.73, open: 112.11, close: 109.85},
  {shadowH: 108.95, shadowL: 106.94, open: 108.89, close: 107.48},
  {shadowH: 108, shadowL: 106.23, open: 107.88, close: 106.91},
  {shadowH: 108.09, shadowL: 106.06, open: 106.64, close: 107.13},
  {shadowH: 106.93, shadowL: 105.52, open: 106.93, close: 105.97},
  {shadowH: 106.48, shadowL: 104.62, open: 105.01, close: 105.68},
  {shadowH: 105.65, shadowL: 104.51, open: 105, close: 105.08},
  {shadowH: 105.3, shadowL: 103.91, open: 103.91, close: 104.35},
  {shadowH: 98.71, shadowL: 95.68, open: 96, close: 97.82},
  {shadowH: 97.88, shadowL: 94.25, open: 97.61, close: 94.8075},
  {shadowH: 94.72, shadowL: 92.51, open: 93.99, close: 93.75},
  {shadowH: 94.08, shadowL: 92.4, open: 93.965, close: 93.65},
  {shadowH: 95.74, shadowL: 93.68, open: 94.2, close: 95.18},
  {shadowH: 95.9, shadowL: 93.82, open: 95.2, close: 94.19},
  {shadowH: 94.07, shadowL: 92.68, open: 94, close: 93.24},
  {shadowH: 93.45, shadowL: 91.85, open: 93.37, close: 92.72},
  {shadowH: 93.77, shadowL: 92.59, open: 93, close: 92.82},
  {shadowH: 93.57, shadowL: 92.11, open: 93.33, close: 93.39},
  {shadowH: 93.57, shadowL: 92.46, open: 93.48, close: 92.51},
  {shadowH: 92.78, shadowL: 89.47, open: 92.72, close: 90.32},
  {shadowH: 91.67, shadowL: 90, open: 90, close: 90.52},
];

const BAR_DATA = [
  {
    values: [
      {y: [40, 30, 20], marker: ['row1', 'row2', 'row3']},
      {y: [10, 20, 10], marker: 'second'},
      {y: [30, 20, 50], marker: ['hello', 'world', 'third']},
      {y: [30, 50, 10], marker: 'fourth'},
    ],
    label: 'Stacked Bar dataset',
    config: {
      colors: [processColor(palette.purple)],
      stackLabels: ['Engineering', 'Sales', 'Marketing'],
    },
  },
];

const LINE_DATA = [
  // {
  //   values: [50, 100, 50, 100, 50],
  //   label: 'Sine function',
  //   config: {
  //     drawValues: false,
  //     colors: [processColor(palette.white)],
  //     mode: 'CUBIC_BEZIER',
  //     drawCircles: false,
  //     lineWidth: 2,
  //     axisDependency: 'RIGHT',
  //   },
  // },
  {
    values: [70, 80, 50, 90, 50],
    label: 'Cosine function',
    config: {
      drawValues: false,
      colors: [processColor(palette.white)],
      mode: 'CUBIC_BEZIER',
      drawCircles: false,
      lineWidth: 2,
    },
  },
];

const CANDLE_DATA = [
  {
    shadowH: 200,
    shadowL: 100,
    open: 100,
    close: 150,
    marker: 'marker 1',
  },
  {
    shadowH: 300,
    shadowL: 150,
    open: 150,
    close: 250,
    marker: 'marker 1',
  },
  {
    shadowH: 100,
    shadowL: 50,
    open: 100,
    close: 150,
    marker: 'marker 1',
  },
  {
    shadowH: 500,
    shadowL: 300,
    open: 250,
    close: 150,
  },
];

const BUTTONS_TITLE_DATA = [
  {value: 'Day'},
  {value: 'Week'},
  {value: 'Month'},
  {value: 'Year'},
];

export {DATA, API_DATA, BAR_DATA, LINE_DATA, CANDLE_DATA, BUTTONS_TITLE_DATA};
