import {WaveCoin, Coin, BitCoin} from '../../assets/';

export const historyData = [
  {
    id: '1',
    date: 'Yesterday',
    data: [
      {
        id: '1',
        title: 'Wave coin',
        date: '23/3/2022',
        icon: WaveCoin,
        value: '+0.001 BTC',
      },
      {
        id: '2',
        title: '30 Nov 2017',
        date: '23/3/2022',
        icon: Coin,
        value: '-0.30455 BTC',
      },
      {
        id: '3',
        title: 'Bitcoin',
        date: '23/3/2022',
        icon: BitCoin,
        value: '+0.001 BTC',
      },
    ],
  },
  {
    id: '2',
    date: 'Apr 25, 2022',
    data: [
      {
        id: '4',
        title: 'Wave coin',
        date: '21/3/2022',
        icon: WaveCoin,
        value: '+0.001 BTC',
      },
      {
        id: '5',
        title: '30 Nov 2017',
        date: '21/3/2022',
        icon: Coin,
        value: '+0.001 BTC',
      },
    ],
  },
  {
    id: '3',
    date: 'Apr 10, 2022',
    data: [
      {
        id: '6',
        title: 'Wave coin',
        date: '9/3/2022',
        icon: Coin,
        value: '-0.00561 BTC',
      },
      {
        id: '7',
        title: '30 Nov 2017',
        date: '4/3/2022',
        icon: BitCoin,
        value: '+0.001 BTC',
      },
    ],
  },
];

export const historyType = [
  {name: 'All'},
  {name: 'Today'},
  {name: 'Week'},
  {name: 'Month'},
];
