import React from 'react';
import {Ethereum, Ripple, WaveCoin, BitCoin, Monero} from '../../assets';

export const TRADING_DETAILS = [
  {
    currencyName: 'Ethereum',
    currencyValue: '0.30462 ETH',
    icon: () => <Ethereum />,
  },
  {
    currencyName: 'Bitcoin',
    currencyValue: '0.30462 BTC',
    icon: () => <BitCoin height={30} width={30} />,
  },
  {
    currencyName: 'Waves coin',
    currencyValue: '0.30462 WAC',
    icon: () => <WaveCoin />,
  },
  {
    currencyName: 'Moreno',
    currencyValue: '0.30462 MOR',
    icon: () => <Monero />,
  },
  {
    currencyName: 'Ripple',
    currencyValue: '0.30462 RIP',
    icon: () => <Ripple />,
  },
  {
    currencyName: 'Ethereum',
    currencyValue: '0.30462 ETH',
    icon: () => <BitCoin height={30} width={30} />,
  },
  {
    currencyName: 'Ethereum',
    currencyValue: '0.30462 ETH',
    icon: () => <Ethereum />,
  },
  {
    currencyName: 'Bitcoin',
    currencyValue: '0.30462 BTC',
    icon: () => <BitCoin height={30} width={30} />,
  },
  {
    currencyName: 'Waves coin',
    currencyValue: '0.30462 WAC',
    icon: () => <WaveCoin />,
  },
  {
    currencyName: 'Moreno',
    currencyValue: '0.30462 MOR',
    icon: () => <Monero />,
  },
];
