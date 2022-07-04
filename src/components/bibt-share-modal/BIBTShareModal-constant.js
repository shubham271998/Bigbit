import React from 'react';
import {Coin, Can, BitCoin} from '../../assets';
export const SHARE_DATA = [
  {
    header: 'David Morales',
    footer: 'San Francisco, CA',
    icon: () => <Coin />,
  },
  {
    header: '#1324940203',
    footer: 'July 26, 2019 - 3:53pm',
    icon: () => <Can />,
  },
  {
    header: 'Bitcoin',
    footer: '0.30462 BTC',
    icon: () => <BitCoin width={32} height={32} />,
  },
];
