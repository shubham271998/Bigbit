import {BitCoin, Coin, Can, PeerCoin} from '../../assets';
import palette from '../../theme/palette';

export const DATA = [
  {
    coin: BitCoin,
    name: 'BitCoin',
    value: 128.76,
    shortName: 'BTC',
    lossGainValue: '+18.33 (18%)',
    graphData: [100, 1, 10, 90, 12, 111, 23, 9, 50, 20],
    color: palette.miami_marmalade,
  },
  {
    coin: Coin,
    name: 'Solana',
    value: 150.7,
    shortName: 'SOL',
    lossGainValue: '+5.92 (6%)',
    graphData: [10, 50, 100, 9, 12, 11, 83, 90, 5, 100],
    color: palette.watermelon,
  },

  {
    coin: Can,
    name: 'Tether',
    value: 200.7,
    shortName: 'TTH',
    lossGainValue: '-15.14 (20%)',
    graphData: [100, 55, 9, 90, 12, 111, 90, 9, 50, 90],
    color: palette.lightning_yellow,
  },
  {
    coin: PeerCoin,
    name: 'PeerCoin',
    value: 150.7,
    shortName: 'DGC',
    lossGainValue: '+10.13 (12%)',
    graphData: [10, 90, 10, 9, 120, 11, 50, 9, 55, 20],
    color: palette.brilliant_rose,
  },
];
