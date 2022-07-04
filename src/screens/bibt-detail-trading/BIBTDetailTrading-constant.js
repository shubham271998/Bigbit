import {processColor} from 'react-native';

import palette from '../../theme/palette';

export const ORDER_BOOK_BID = [
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
  {
    orderBid: 919.23,
  },
];

export const ORDER_BOOK_ASK = [
  {
    orderAsk: 919.16,
  },
  {
    orderAsk: 919.16,
  },
  {
    orderAsk: 919.16,
  },
  {
    orderAsk: 919.16,
  },
  {
    orderAsk: 919.16,
  },
  {
    orderAsk: 919.16,
  },
  {
    orderAsk: 919.16,
  },
  {
    orderAsk: 919.16,
  },
];

export const ORDER_BOOK_PRICE = [
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
];

export const TRADES_BID = [
  {
    orderBid: 916.23,
  },
  {
    orderBid: 916.23,
  },
  {
    orderBid: 916.23,
  },
  {
    orderBid: 916.23,
  },
  {
    orderBid: 916.23,
  },
  {
    orderBid: 916.23,
  },
  {
    orderBid: 916.23,
  },
  {
    orderBid: 916.23,
  },
];

export const TRADES_PRICE = [
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
  {
    orderPrice: '0.010',
  },
];

export const CANDLE_DATA = [
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
export const CURRENCY = [
  {name: 'BTC'},
  {name: 'DGC'},
  {name: 'ETH'},
  {name: 'SOL'},
  {name: 'ADA'},
  {name: 'AVAX'},
];
export const BAR_DATA = [
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
