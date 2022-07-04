import React from 'react';

import {
  BIBTCurrenciesTrading,
  BIBTDashBoard,
  BIBTHome,
  BIBTMarketOverview,
  BIBTScanQRCode,
} from '../../screens/';

import {
  ActivityIcon,
  Arrow,
  Bell,
  BigBitHeader,
  Clock,
  DashBoardIcon,
  DetailCandleSticksIcon,
  Dots,
  HomeIcon,
  OutLined,
  ScannerIcon,
  Script,
} from '../../assets';

const BOTTOMTABNAVIGATOR_DETAILS = [
  {
    name: 'Home.',
    component: BIBTHome,
    icon: ({color}) => <HomeIcon color={color} />,
    leftIcon: () => <BigBitHeader />,
    middleIcon: () => <Script />,
    rightIcon: () => <Bell />,
    headerTitle: 'Home',
  },

  {
    name: 'Trading',
    component: BIBTCurrenciesTrading,
    icon: ({color}) => <ActivityIcon color={color} />,
    leftIcon: () => <BigBitHeader />,
    rightIcon: () => <OutLined />,
    headerTitle: 'Currency Trading',
  },

  {
    name: 'Scanner',
    component: BIBTScanQRCode,
    leftIcon: () => <BigBitHeader />,
    icon: ({color}) => <ScannerIcon color={color} />,
    rightIcon: () => <Clock />,
    headerTitle: 'Scanner',
  },

  {
    name: 'Market',
    component: BIBTMarketOverview,
    icon: ({color}) => <DetailCandleSticksIcon color={color} />,
    leftIcon: () => <BigBitHeader />,
    rightIcon: () => <Dots />,
    headerTitle: 'Market',
  },

  {
    name: 'DashBoard',
    component: BIBTDashBoard,
    icon: ({color}) => <DashBoardIcon color={color} />,
    leftIcon: () => <BigBitHeader />,
    rightIcon: () => <Dots />,
    headerTitle: 'DashBoard',
  },
];

export {BOTTOMTABNAVIGATOR_DETAILS};
